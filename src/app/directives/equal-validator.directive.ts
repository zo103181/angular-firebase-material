import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor(
      @Attribute('validateEqual') public validateEqual: string,
      /*
        Issue:
        -------
        Everything is working fine until you go and change the password value after
        you've entered text in the confirm password field.

        Example:
        ---------
        Type “123” in password field, then “123” in confirm password, then change
        the password input to “1234”. The validation still passes

        'Reverse' Solution:
        --------------------
        When reverse is true, we will still perform equal validation, but instead of
        adding errors to current control, we add errors to the target control.
      */
      @Attribute('reverse') public reverse: string
    ) { }

    private get isReverse() {
        if (!this.reverse) { return false; }
        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        const v = c.value;

        // control value
        const e = c.root.get(this.validateEqual);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
          return {
            validateEqual: false
          };
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) { e.setErrors(null); }
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }

        return null;
    }
}
