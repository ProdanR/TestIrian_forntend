import {Component, OnInit} from '@angular/core';
import {IDoctor} from '../doctor.model';
import {Router} from '@angular/router';
import {DoctorService} from '../../rest_services/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  // @ts-ignore
  doctor: IDoctor = {};

  constructor(private  doctorService: DoctorService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addNewDoctor() {
    this.doctorService.addDoctor(this.doctor).subscribe((data) => {
      console.log(data);
      this.router.navigate(['home']);
    }, error => {
      console.log(error);
    });
  }
}
