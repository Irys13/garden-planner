import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  plantList() {
    let plants = [
      {
        name: 'potato',
        quantity: 1,
        nitrogen: 'low'
      },
      {
        name: 'tomato',
        quantity: 2,
        nitrogen: 'high'
      },
      {
        name: 'radishes',
        quantity: 16,
        nitrogen: 'medium'
      }
    ];

    function listOfPlantNames(p) {
      let plantNames = [];
      for (let i = 0; i < p.length; i += 1) {
        plantNames.push(p[1].name);
      }
      return plantNames;
    }
  }

  choosePlants() {

  }
}
