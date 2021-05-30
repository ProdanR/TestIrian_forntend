import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {IAppointment} from '../appointment.model';
import {DiagnosticDialogComponent} from '../../diagnostic-dialog/diagnostic-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AppointmentService} from '../../rest_services/appointment.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

// @ts-ignore
export class AppointmentListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['animalName', 'doctorName', 'appointmentDateTime', 'status', 'diagnostic', 'totalCost', 'edit'];
  // @ts-ignore
  dataSource: MatTableDataSource<IAppointment>;


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;


  appointments: any = [];


  constructor(private appointmentService: AppointmentService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (data: any) => {
        console.log(data);
        this.appointments = data;
        console.log(this.appointments);
      }, error => {
        console.log(error);
      }, () => {
        this.dataSource = new MatTableDataSource(this.appointments);
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          console.log(data);
          return data.doctor.name.toLowerCase().includes(filter);
        };
        this.dataSource.paginator = this.paginator;
      });


  }


  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  // tslint:disable-next-line:typedef
  openDialog(approiment: IAppointment) {
    this.dialog.open(DiagnosticDialogComponent, {
      width: '500px',
      data: {
        animalName: approiment.animalName,
        appointmentDateTime: approiment.appointmentDateTime,
        diagnostic: approiment.diagnostic
      }
    });
  }
}
