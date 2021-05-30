import {Component, OnInit} from '@angular/core';
import {IService} from '../service.model';
import {Router} from '@angular/router';
import {ServiceService} from '../../rest_services/service.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  // @ts-ignore
  service: IService = {};

  constructor(private serviceService: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewService() {
    console.log(this.service);
    this.serviceService.addService(this.service).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['new-appointment']);
      },
      error => {
        console.log(error);
      });

  }
}
