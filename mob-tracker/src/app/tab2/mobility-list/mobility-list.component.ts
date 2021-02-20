import {ChangeDetectionStrategy, Component, Output, Input, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mobility-list',
  templateUrl: './mobility-list.component.html',
  styleUrls: ['./mobility-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobilityListComponent implements OnInit {

  @Input()
  mobilityList: any;

  @Output()
  selectedMobility = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

}
