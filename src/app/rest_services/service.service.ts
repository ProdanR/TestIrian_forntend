import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IService} from '../service/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'http://localhost:8080/api/service/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  addService(service: IService) {
    return this.http.post(this.url + 'create', service);
  }

  // tslint:disable-next-line:typedef
  getAllServices() {
    return this.http.get(this.url + 'all');
  }
}
