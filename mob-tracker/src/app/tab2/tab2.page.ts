import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserServiceService} from '../api/user-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  mobilityList$: Observable<any[]>;

  constructor(
    public router: Router,
    public userService: UserServiceService
  ) {
  }

  async selectedMobility(id: number) {
    console.log(id);
  }

  ngOnInit(): void {
    this.mobilityList$ = this.userService.readMobilitiesList();
  }

}
