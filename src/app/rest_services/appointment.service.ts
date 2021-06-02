import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppointment} from '../appointment/appointment.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url = 'http://localhost:8080/api/appointment/';
  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();

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

  // tslint:disable-next-line:typedef
  deleteAppointment(appointmentId: number) {
    this.http.delete(this.url + 'delete/' + appointmentId).subscribe((isSuccess) => {
      if (isSuccess) {
        this._deleteOperationSuccessfulEvent$.next(true);
      } else {
        this._deleteOperationSuccessfulEvent$.next(false);
      }
    }, error => {
      console.log(error);
    });
  }

  get deleteOperationSuccessfulEvent$(): Observable<boolean> {
    return this._deleteOperationSuccessfulEvent$.asObservable();
  }
}
