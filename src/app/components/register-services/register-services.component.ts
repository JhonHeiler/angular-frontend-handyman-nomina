import { Component} from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-register-services',
  templateUrl: './register-services.component.html',
  styleUrls: ['./register-services.component.css'],
})
export class RegisterServicesComponent  {

  private initialService = {
    idTechnical: '',
    idService: '',
    startDate: '',
    endDate: '',
  }

  public service: Service = {...this.initialService};

  constructor(private readonly serviceService: ServiceService) {}

 

  register():void {
    this.serviceService.register(this.service).subscribe((data: Service) => {
      console.log('Heiler: ',data);
     this.service = {...this.initialService}
    });
  }
}
