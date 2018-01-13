import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../classes/settings.class';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  states = [
    { value: '', viewValue: '' },
    { value: 'AL', viewValue: 'Alabama'},
    { value: 'AK', viewValue: 'Alaska'},
    { value: 'AZ', viewValue: 'Arizona'},
    { value: 'AR', viewValue: 'Arkansas'},
    { value: 'CA', viewValue: 'California'},
    { value: 'CO', viewValue: 'Colorado'},
    { value: 'CT', viewValue: 'Connecticut'},
    { value: 'DE', viewValue: 'Delaware'},
    { value: 'DC', viewValue: 'District Of Columbia'},
    { value: 'FL', viewValue: 'Florida'},
    { value: 'GA', viewValue: 'Georgia'},
    { value: 'HI', viewValue: 'Hawaii'},
    { value: 'ID', viewValue: 'Idaho'},
    { value: 'IL', viewValue: 'Illinois'},
    { value: 'IN', viewValue: 'Indiana'},
    { value: 'IA', viewValue: 'Iowa'},
    { value: 'KS', viewValue: 'Kansas'},
    { value: 'KY', viewValue: 'Kentucky'},
    { value: 'LA', viewValue: 'Louisiana'},
    { value: 'ME', viewValue: 'Maine'},
    { value: 'MD', viewValue: 'Maryland'},
    { value: 'MA', viewValue: 'Massachusetts'},
    { value: 'MI', viewValue: 'Michigan'},
    { value: 'MN', viewValue: 'Minnesota'},
    { value: 'MS', viewValue: 'Mississippi'},
    { value: 'MO', viewValue: 'Missouri'},
    { value: 'MT', viewValue: 'Montana'},
    { value: 'NE', viewValue: 'Nebraska'},
    { value: 'NV', viewValue: 'Nevada'},
    { value: 'NH', viewValue: 'New Hampshire'},
    { value: 'NJ', viewValue: 'New Jersey'},
    { value: 'NM', viewValue: 'New Mexico'},
    { value: 'NY', viewValue: 'New York'},
    { value: 'NC', viewValue: 'North Carolina'},
    { value: 'ND', viewValue: 'North Dakota'},
    { value: 'OH', viewValue: 'Ohio'},
    { value: 'OK', viewValue: 'Oklahoma'},
    { value: 'OR', viewValue: 'Oregon'},
    { value: 'PA', viewValue: 'Pennsylvania'},
    { value: 'RI', viewValue: 'Rhode Island'},
    { value: 'SC', viewValue: 'South Carolina'},
    { value: 'SD', viewValue: 'South Dakota'},
    { value: 'TN', viewValue: 'Tennessee'},
    { value: 'TX', viewValue: 'Texas'},
    { value: 'UT', viewValue: 'Utah'},
    { value: 'VT', viewValue: 'Vermont'},
    { value: 'VA', viewValue: 'Virginia'},
    { value: 'WA', viewValue: 'Washington'},
    { value: 'WV', viewValue: 'West Virginia'},
    { value: 'WI', viewValue: 'Wisconsin'},
    { value: 'WY', viewValue: 'Wyoming'},
  ];

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settings = {
      uid: '',
      email: '',
      firstname: '',
      lastname: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    };
    this.settingsService.getSettings().subscribe(data => {
      this.settings = data;
    });
  }

  save(setting: Settings) {
    this.settingsService.updateSettings(setting);
  }
  
}
