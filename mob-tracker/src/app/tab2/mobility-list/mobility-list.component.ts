import {ChangeDetectionStrategy, Component, Output, Input, OnInit, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserServiceService} from '../../api/user-service.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-mobility-list',
  templateUrl: './mobility-list.component.html',
  styleUrls: ['./mobility-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobilityListComponent implements OnInit {

  login$: Subscription;

  @Input()
  mobilityList: any;

  @Output()
  selectedMobility = new EventEmitter<number>();

  constructor(
    public router: Router,
    public userService: UserServiceService,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

  async deleteMobility(href: string) {
    const id = href.substring(href.lastIndexOf('/') + 1 );
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
