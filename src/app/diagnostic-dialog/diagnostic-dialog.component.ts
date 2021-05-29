import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IAppointment} from '../appointment/appointment.model';

@Component({
  selector: 'app-diagnostic-dialog',
  templateUrl: './diagnostic-dialog.component.html',
  styleUrls: ['./diagnostic-dialog.component.css']
})
export class DiagnosticDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IAppointment) {
  }

  ngOnInit(): void {
  }

}
