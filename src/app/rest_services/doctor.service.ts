import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDoctor} from '../doctor/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url = 'http://localhost:8080/api/doctor/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  addDoctor(doctor: IDoctor) {
    return this.http.post(this.url + 'create', doctor);
  }

  // tslint:disable-next-line:typedef
  getAllDoctors() {
    return this.http.get(this.url + 'all');
  }
}
