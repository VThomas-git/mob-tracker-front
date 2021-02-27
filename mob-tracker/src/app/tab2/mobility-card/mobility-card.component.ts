import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {UserServiceService} from '../../api/user-service.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-mobility-card',
  templateUrl: './mobility-card.component.html',
  styleUrls: ['./mobility-card.component.scss'],
})
export class MobilityCardComponent implements OnInit {

  login$: Subscription;

  @Input()
  mobility: any;

  updateForm = false;

  constructor(
    public router: Router,
    public userService: UserServiceService,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

  showUpdateMobility() {
    this.updateForm = !this.updateForm;
  }

  mobilityUpdate(href: string) {
    const id = href.substring(href.lastIndexOf('/') + 1);
    this.login$ = this.userService.updateMobility(this.mobility, id).subscribe(
      async (isUpdated: any) => {
        if (isUpdated) {
          const alert = await this.alertCtrl.create({
            header: 'Success',
            message: 'The mobility has been correctly updated',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Problem',
            message: 'The request may have encountered a problem',
            buttons: ['OK']
          });
          await alert.present();
        }
        window.location.reload();
      },
      error => {
        console.log(error);
        window.location.reload();
      }
    );
  }

  async deleteMobility(href: string) {
    const id = href.substring(href.lastIndexOf('/') + 1);
    this.login$ = this.userService.deleteMobility(id).subscribe(
      async (isDeleted: any) => {
        if (isDeleted) {
          const alert = await this.alertCtrl.create({
            header: 'Success',
            message: 'The mobility has been correctly deleted',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Problem',
            message: 'The request may have encountered a problem',
            buttons: ['OK']
          });
          await alert.present();
        }
        window.location.reload();
      },
      error => {
        console.log(error);
        window.location.reload();
      }
    );
  }

}
