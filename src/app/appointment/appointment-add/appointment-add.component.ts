import {Component, OnInit} from '@angular/core';
import {IAppointment} from '../appointment.model';
import {Router} from '@angular/router';
import {DoctorService} from '../../rest_services/doctor.service';
import {AppointmentService} from '../../rest_services/appointment.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})

export class AppointmentAddComponent implements OnInit {
  // @ts-ignore
  appointment: IAppointment = {};
  doctors: any = [];

  constructor(private appointmentService: AppointmentService, private doctorService: DoctorService, private router: Router) {
  }

  ngOnInit(): void {
    this.appointment.services = [];
    this.doctorService.getAllDoctors().subscribe(
      (data: any) => {
        console.log(data);
        this.doctors = data;
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  addAppointment() {
    this.appointmentService.addAppointment(this.appointment).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  addService(event: any[]) {
    this.appointment.services = event;
  }
}
