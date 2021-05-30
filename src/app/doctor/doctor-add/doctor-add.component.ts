import {Component, OnInit} from '@angular/core';
import {IService} from '../../service/service.model';
import {IDoctor} from '../doctor.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {


  // @ts-ignore
  doctor: IDoctor = {};

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewDoctor() {
    this.router.navigate(['home']);
  }
}
