import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {IAppointment} from '../../appointment/appointment.model';
import {IService} from '../service.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['active', 'name', 'price'];
  // @ts-ignore
  dataSource: MatTableDataSource<IService>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  services: IService[] = [
    {
      id: '1',
      name: 'vacinare',
      price: 20,
      active: true,
    },
    {
      id: '2',
      name: 'vacinare2',
      price: 20,
      active: false,
    },
    {
      id: '3',
      name: 'vacinare3',
      price: 20,
      active: true,
    },
    {
      id: '1',
      name: 'deparazitare',
      price: 20,
      active: true,
    },
    {
      id: '2',
      name: 'curatare',
      price: 20,
      active: false,
    },
    {
      id: '3',
      name: 'papabun',
      price: 20,
      active: true,
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.services);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // tslint:disable-next-line:typedef
  toggle(event: MatSlideToggleChange, serviceId: number) {
    console.log(event.checked);
    console.log(serviceId);
  }
}
