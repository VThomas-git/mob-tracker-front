import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {UserServiceService} from '../api/user-service.service';

import {Mobility} from '../shared/mobility.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  login$: Subscription;

  mobility: Mobility = new Mobility();

  constructor(
    public router: Router,
    public userService: UserServiceService,
    public alertCtrl: AlertController
  ) {
  }

  mobilityRegister() {
    this.mobility.submitDate = new Date();
    this.login$ = this.userService.create(this.mobility)
      .subscribe(
        async (isRegistered: any) => {
          if (isRegistered) {
            const alert = await this.alertCtrl.create({
              header: 'Success',
              message: 'The mobility has been correctly registered',
              buttons: ['OK']
            });
            await alert.present();
            await this.router.navigate(['tabs/tab2']);
          } else {
            window.location.reload();
          }
        }
      );
  }
}
