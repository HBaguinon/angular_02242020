import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  sortColName = '';

  @Input()
  cars: Car[] = [];

  // this is a getter function, much like C# getter property
  get sortedCars() {
    if (this.sortColName.length > 0) {

      return this.cars.concat().sort((a: Car, b: Car) => {

        const aValue = String(a[this.sortColName]).toUpperCase();
        const bValue = String(b[this.sortColName]).toUpperCase();

        if (aValue < bValue) {
          return -1;
        } else if (aValue > bValue) {
          return 1;
        } else {
          return 0;
        }

      });

    } else {
      return this.cars;
    }
  }

  @Output()
  deleteCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  doSort(colName: string) {
    this.sortColName = colName;
  }



}
