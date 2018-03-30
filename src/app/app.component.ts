import { Component, OnInit } from '@angular/core';
import { Chart } from './class/chart';
import { Circle } from './class/circle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    /*first example */
    Chart.chartFixed();
    Chart.chartInDiv();

    /*second example */
    Circle.selectAllCircles();
    Circle.moveRandomCircles();
    Circle.generateCircles();
  }
}
