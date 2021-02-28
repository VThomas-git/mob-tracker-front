import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserServiceService} from '../../api/user-service.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mobility-list',
  templateUrl: './mobility-list.component.html',
  styleUrls: ['./mobility-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobilityListComponent implements OnInit {

  // To display filters fields
  nameFilter = false;
  countryFilter = false;
  dateFilter = false;
  promotionFilter = false;

  @Input()
  mobilityList: Observable<any>;

  nameFiltered$ = '';
  countryFiltered$ = '';
  originDate$ = new Date(0, 0, 0);
  dateFiltered$ = this.originDate$;
  promotionFiltered$ = 0;

  constructor(
    public router: Router,
    public userService: UserServiceService,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

  showNameFilter() {
    this.nameFilter = !this.nameFilter;
  }

  showCountryFilter() {
    this.countryFilter = !this.countryFilter;
  }

  showDateFilter() {
    this.dateFilter = !this.dateFilter;
  }

  showPromotionFilter() {
    this.promotionFilter = !this.promotionFilter;
  }

}
