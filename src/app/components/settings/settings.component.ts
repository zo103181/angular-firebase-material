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
