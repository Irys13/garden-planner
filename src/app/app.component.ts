import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  static X_SIZE = 3;
  static Y_SIZE = 3;

  title = 'garden-planner';
  options: GridsterConfig;
  public dashboard: Array<GridsterItem>;
  public square: GridsterItem[] = [];
  public newItem: GridsterItem;
  public initialPositionX = 0;
  public initialPositionY = 0;
  xSizeLimit:number = AppComponent.X_SIZE;
  ySizeLimit:number = AppComponent.Y_SIZE;


  constructor() {
    this.options = {
      pushItems: true,
      minCols: 20,
      maxCols: 20,
      minRows: 14,
      maxRows: 100,
      margin: 5,
      fixedRowHeight: 120,
      setGridSize: true,
      mobileBreakpoint: 0,
      gridType: 'fit',
      disableAutoPositionOnConflict: false,
      resizable: {
          enabled: false
      },
      draggable: {
          enabled: true
      }
   };
  }

  removeItem(item) {
    this.square.splice(this.dashboard.indexOf(item), 1);
  }

  addSquare() {
    this.square.push({cols: 1, rows: 1, y: 0, x: 0});
  }

  addSquareFoot() {
    this.shiftXAxis();
    this.incrementXValues();
    this.shiftAndIcrementYAxis();
  }

  shiftXAxis() {
    for (let yP = this.initialPositionY; yP < this.ySizeLimit ; ++yP) {
      console.log('yP: ' + yP);
      for (let xP = this.initialPositionX; xP < this.xSizeLimit ; ++xP) {
        console.log('\txP: ' + xP);
        this.square.push({x: xP, y: yP, rows: 1, cols: 1});
      }
    }
  }

  incrementXValues() {
    this.initialPositionX += AppComponent.X_SIZE;
    this.xSizeLimit += AppComponent.X_SIZE;
  }

  shiftAndIcrementYAxis() {
    if (this.initialPositionX > this.options.maxCols - AppComponent.X_SIZE){
      this.initialPositionX = 0;
      this.xSizeLimit = AppComponent.X_SIZE;
      this.initialPositionY += AppComponent.Y_SIZE;
      this.ySizeLimit += AppComponent.Y_SIZE;
    }
  }
}

