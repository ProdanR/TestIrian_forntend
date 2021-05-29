import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {IAppointment} from '../appointment.model';
import {DiagnosticDialogComponent} from '../../diagnostic-dialog/diagnostic-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

// @ts-ignore
export class AppointmentListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['animalName', 'doctorName', 'dateHour', 'status', 'diagnostic', 'totalCost'];
  // @ts-ignore
  dataSource: MatTableDataSource<IAppointment>;


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  users: IAppointment[] = [
    {
      id: '1',
      animalName: 'cutu',
      dateHour: '5/28/2021 12:00',
      doctorName: 'doctor1',
      services: ['spalat', 'tratat', 'dezinsectie'],
      diagnostic: 'nu are nimic bun, are paraziti cu ce il hraniti?/n speram sa se vindece cu scuuces si aveti mai mare gijja data viitoare\n stiu ca nu e un diagnostic, nu sunt doctor sunt consilier pentru caini ce asteptati?',
      status: 'created',
      totalCost: 10,
    },
    {
      id: '1',
      animalName: 'pisi',
      dateHour: '5/28/2021 12:00',
      doctorName: 'popescu',
      services: ['spalat', 'tratat', 'dezinsectie'],
      diagnostic: 'nu are nimic',
      status: 'confirmed',
      totalCost: 10,
    },
    {
      id: '1',
      animalName: 'leu',
      dateHour: '5/28/2021 12:00',
      doctorName: 'ionescu',
      services: ['spalat', 'tratat', 'dezinsectie'],
      diagnostic: 'nu are nimic',
      status: 'closed',
      totalCost: 10,
    },
    {
      id: '1',
      animalName: 'leu',
      dateHour: '5/28/2021 12:00',
      doctorName: 'ionescu',
      services: ['spalat', 'tratat', 'dezinsectie'],
      diagnostic: 'nu are nimic',
      status: 'closed',
      totalCost: 10,
    },
    {
      id: '1',
      animalName: 'leu',
      dateHour: '5/28/2021 12:00',
      doctorName: 'ionescu',
      services: ['spalat', 'tratat', 'dezinsectie'],
      diagnostic: 'nu are nimic',
      status: 'closed',
      totalCost: 10,
    },
    {
      id: '1',
      animalName: 'leu',
      dateHour: '5/28/2021 12:00',
      doctorName: 'ionescu',
      services: ['spalat', 'tratat', 'dezinsectie'],
      diagnostic: 'nu are nimic',
      status: 'closed',
      totalCost: 10,
    },

  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.filterPredicate = (data: IAppointment, filter: string) => {
      return data.doctorName.toLowerCase().includes(filter);
    };
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // tslint:disable-next-line:typedef
  openDialog(approiment: IAppointment) {
    this.dialog.open(DiagnosticDialogComponent, {
      width: '500px',
      data: {
        animalName: approiment.animalName,
        dateHour: approiment.dateHour,
        diagnostic: approiment.diagnostic
      }
    });
  }
}
