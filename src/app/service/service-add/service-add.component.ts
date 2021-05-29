import {Component, OnInit} from '@angular/core';
import {IService} from '../service.model';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  // @ts-ignore
  service: IService = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewService() {
    return false;
  }
}
