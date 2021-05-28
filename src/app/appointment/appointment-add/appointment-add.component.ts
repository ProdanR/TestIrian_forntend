import {Component, OnInit} from '@angular/core';
import {IAppointment} from '../appointment.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {


  appointment: IAppointment = {
    _id: '',
    animalName: '',
    dateHour: '',
    diagnostic: '',
    doctorName: '',
    services: [],
    status: 'created',
    totalCost: 0
  };
  service: any = {};

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  addAppointment() {
    console.log('add new appointment');
    this.router.navigate(['home']);
  }

  // tslint:disable-next-line:typedef
  addNewService() {
    console.log('add new service');
  }
}
