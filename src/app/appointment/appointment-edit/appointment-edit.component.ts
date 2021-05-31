import {Component, OnInit} from '@angular/core';
import {IAppointment} from '../appointment.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentService} from '../../rest_services/appointment.service';
import {DoctorService} from '../../rest_services/doctor.service';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {


  // @ts-ignore
  appointment: any = {};
  doctors: any = [];
  // @ts-ignore
  id: number;
  selectedServices: any = [];

  // tslint:disable-next-line:max-line-length
  constructor(private doctorService: DoctorService, private appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this.appointmentService.getAppointmentById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.appointment = data;
        this.appointment.appointmentDateTime = this.toDateString(this.appointment.appointmentDateTime);
        this.selectedServices = this.appointment.services.map((service: { id: any; }) => service.id);
        console.log(this.selectedServices);
      }, error => {
        console.log(error);
      });

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
  editAppointment() {
    this.appointment.services = this.selectedServices;
    console.log(this.appointment);
    this.appointmentService.updateAppointment(this.appointment, this.appointment.id, this.appointment.doctor.id).subscribe(
      (data) => {
        this.router.navigate(['home']);
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  private toDateString(date: any): string {
    return date.substr(0, 10) + 'T' + date.substr(11);
  }

  // tslint:disable-next-line:typedef
  addService(event: any[]) {
    this.selectedServices = event;
  }
}
