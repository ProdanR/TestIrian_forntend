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
}
