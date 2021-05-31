import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppointment} from '../appointment/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url = 'http://localhost:8080/api/appointment/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  addAppointment(appointment: IAppointment) {
    return this.http.post(this.url + 'create/' + appointment.doctorId, appointment);
  }

  // tslint:disable-next-line:typedef
  getAllAppointments() {
    return this.http.get(this.url + 'all');
  }

  // tslint:disable-next-line:typedef
  getAppointmentById(appointmentId: number) {
    return this.http.get(this.url + 'get/' + appointmentId);
  }

  // tslint:disable-next-line:typedef
  updateAppointment(appointment: any, appointmentId: number, doctorId: number) {
    return this.http.put(this.url + 'update/' + appointmentId + '/' + doctorId, appointment);
  }
}
