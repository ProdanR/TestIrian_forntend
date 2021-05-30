import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppointmentListComponent} from './appointment/appointment-list/appointment-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { DiagnosticDialogComponent } from './diagnostic-dialog/diagnostic-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServiceAddComponent } from './service/service-add/service-add.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { DoctorAddComponent } from './doctor/doctor-add/doctor-add.component';
import {MatSelectModule} from '@angular/material/select';
import { AppointmentEditComponent } from './appointment/appointment-edit/appointment-edit.component';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DiagnosticDialogComponent,
    HomeComponent,
    AppointmentAddComponent,
    ServiceAddComponent,
    ServiceListComponent,
    DoctorAddComponent,
    AppointmentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    ScrollingModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
