import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {IAppointment} from '../appointment.model';
import {DiagnosticDialogComponent} from '../../diagnostic-dialog/diagnostic-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AppointmentService} from '../../rest_services/appointment.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit {
  displayedColumns: string[] = ['animalName', 'doctorName', 'appointmentDateTime', 'status', 'diagnostic', 'totalCost', 'edit', 'delete'];
  // @ts-ignore
  dataSource: MatTableDataSource<IAppointment>;
  // @ts-ignore
  deleteOperationSuccessfulSubscription: Subscription;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  appointments: any = [];

  constructor(private appointmentService: AppointmentService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.subscribeToDelete();
    this.getAppointments();

  }

  // tslint:disable-next-line:typedef
  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(
      (data: any) => {
        console.log(data);
        this.appointments = data;
      }, error => {
        console.log(error);
      }, () => {
        this.dataSource = new MatTableDataSource(this.appointments);
        this.filterSortAndPaginator();
      });
  }

  // tslint:disable-next-line:typedef
  filterSortAndPaginator() {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.doctor.name.toLowerCase().includes(filter);
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

  // tslint:disable-next-line:typedef
  subscribeToDelete() {
    this.deleteOperationSuccessfulSubscription = this.appointmentService.deleteOperationSuccessfulEvent$
      .subscribe((isSuccessful: boolean) => {
        if (isSuccessful === true) {
          this.getAppointments();
        } else {
          console.log('Error delete appointment');
        }
      });
  }

  // tslint:disable-next-line:typedef
  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id);
  }
}
