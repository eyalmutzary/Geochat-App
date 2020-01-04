import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-room-stats',
  templateUrl: './room-stats.component.html',
  styleUrls: ['./room-stats.component.css']
})
export class RoomStatsComponent implements OnInit, OnDestroy {
  time =  new Date();
  interval;

  constructor() {

   }

  ngOnInit() {
    this.interval = setInterval(() => {
       this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    this.interval = undefined;
  }

}
