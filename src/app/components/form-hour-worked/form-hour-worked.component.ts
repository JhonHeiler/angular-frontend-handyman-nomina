import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceConsult, ServiceQuery } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-form-hour-worked',
  templateUrl: './form-hour-worked.component.html',
  styleUrls: ['./form-hour-worked.component.css'],
})
export class FormHourWorkedComponent implements OnInit {
  
  public serviceQuery: ServiceQuery = {
    idTechnical: '',
    weekNumber: '',
  };
  
  @Output() query = new EventEmitter<ServiceConsult>();

  constructor(private readonly serviceService: ServiceService) {}

  ngOnInit(): void {}

  getReport() {
    this.serviceService
      .getReport(this.serviceQuery)
      .subscribe((data: ServiceConsult) => {
        this.query.emit(data);
      });
  }
}
