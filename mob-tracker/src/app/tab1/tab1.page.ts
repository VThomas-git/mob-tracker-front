import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {UserServiceService} from '../api/user-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  login$: Subscription;

  name: string;
  promotion: number;
  country: string;
  city: string;
  begin: string;
  end: string;

  constructor(
    public router: Router,
    public userService: UserServiceService,
    public alertCtrl: AlertController
  ) {
  }

  mobilityRegister() {
    this.login$ = this.userService.create(this.name, this.promotion, this.country, this.city, this.begin, this.end).subscribe(
      async (isRegistered: any) => {
        if (isRegistered) {
          const alert = await this.alertCtrl.create({
            header: 'Success',
            message: 'The mobility has been correctly registered',
            buttons: ['OK']
          });
          await alert.present();
          await this.router.navigateByUrl('tabs/tab2');
        }
      }
    );
  }
}
