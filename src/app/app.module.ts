import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterServicesComponent } from './components/register-services/register-services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ServiceReportComponent } from './pages/service-report/service-report.component';
import { ServiceService } from './services/service.service';
import { HourWorkedComponent } from './pages/hour-worked/hour-worked.component';
import { FormHourWorkedComponent } from './components/form-hour-worked/form-hour-worked.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterServicesComponent,
    NavbarComponent,
    ServiceReportComponent,
    HourWorkedComponent,
    FormHourWorkedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
