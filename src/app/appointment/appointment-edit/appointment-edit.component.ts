import { Component, OnInit } from '@angular/core';
import {IAppointment} from '../appointment.model';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {


  // @ts-ignore
  appointment: IAppointment = {};


  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  editAppointment() {
    return false;
  }
}
