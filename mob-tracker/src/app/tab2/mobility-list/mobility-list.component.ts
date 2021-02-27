import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
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

  constructor(
    public router: Router,
    public userService: UserServiceService,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

}
