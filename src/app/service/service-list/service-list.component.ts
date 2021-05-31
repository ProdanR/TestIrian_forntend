import {AfterViewInit, Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {IAppointment} from '../../appointment/appointment.model';
import {IService} from '../service.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';
import {ServiceService} from '../../rest_services/service.service';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  displayedColumns: string[] = ['active', 'name', 'price'];
  // @ts-ignore
  dataSource: MatTableDataSource<IService>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() serviceEvent = new EventEmitter<any[]>();


  // @ts-ignore
  services: any = [];

  @Input()
  selectedServiceId: any = [];

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe(
      (data: any) => {
        console.log(data);
        this.services = data;
      },
      error => {
        console.log(error);
      },
      () => {


        console.log(this.services);

        // tslint:disable-next-line:only-arrow-functions
        this.selectedServiceId.forEach((value: any) => {
          let index = this.services.findIndex(((ser: { id: number; }) => ser.id === value));
          this.services[index].active = true;


        });

        console.log(this.services);
        //
        // @ts-ignore
        this.dataSource = new MatTableDataSource(this.services);
        this.dataSource.paginator = this.paginator;
      }
    );
  }


  // tslint:disable-next-line:typedef
  toggle(event: MatSlideToggleChange, row: any) {
    row.active = event.checked;

    if (event.checked) {
      this.selectedServiceId.push(row.id);
    } else {
      const index = this.selectedServiceId.indexOf(row.id);
      this.selectedServiceId.splice(index, 1);
    }
    this.serviceEvent.emit(this.selectedServiceId);
  }
}
