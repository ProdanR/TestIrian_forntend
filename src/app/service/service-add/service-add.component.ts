import {Component, OnInit} from '@angular/core';
import {IService} from '../service.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  // @ts-ignore
  service: IService = {};

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewService() {
    this.router.navigate(['new-appointment']);
  }
}
