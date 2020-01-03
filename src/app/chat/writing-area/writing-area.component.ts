import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-area',
  templateUrl: './writing-area.component.html',
  styleUrls: ['./writing-area.component.css']
})
export class WritingAreaComponent implements OnInit {
  rows = "3";

  constructor() { }

  ngOnInit() {
    if (window.screen.width < 1000) { // 768px portrait
      console.log("Phone screen")
      this.rows = "2"
    }
  }

}
