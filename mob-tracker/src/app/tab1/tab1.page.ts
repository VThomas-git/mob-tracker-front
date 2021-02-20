import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name: string;
  promotion: number;
  country: string;
  city: string;
  begin: string;
  end: string;

  constructor(
    public router: Router,
    public alertCtrl: AlertController
  ) {}

  mobilityRegister() {

  }
}
