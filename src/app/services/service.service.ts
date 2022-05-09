import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service, ServiceConsult, ServiceQuery } from '../models/service.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceService {
  private readonly API_URL = `${environment.uriBase}`;
  constructor(private readonly http: HttpClient) {}

  register(service: Service): Observable<Service> {
    return this.http.post<Service>(this.API_URL, service);
  }

  getReport(serviceQuery: ServiceQuery):Observable<ServiceConsult> {
    return this.http.get<ServiceConsult>(
      `${this.API_URL}?idTechnical=${serviceQuery.idTechnical}&weekNumber=${serviceQuery.weekNumber}`
    );
  }
}
