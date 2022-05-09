import { Component, OnInit } from '@angular/core';
import { ServiceConsult } from 'src/app/models/service.model';

@Component({
  selector: 'app-hour-worked',
  templateUrl: './hour-worked.component.html',
  styleUrls: ['./hour-worked.component.css'],
})
export class HourWorkedComponent implements OnInit {
  displayedColumns: string[] = [
    'Identificación',
    'Hora normal',
    'Hora nocturna',
    'Hora dominicales',
    'Hora normales extra',
    'Hora noturna extra',
    'Hora dominicales extra'
  ];

  dataSource: ServiceConsult[] = [];

  constructor() {}

  ngOnInit(): void {}

  getServiceConsult(data: any) {
    this.dataSource = [data];
  }
}
