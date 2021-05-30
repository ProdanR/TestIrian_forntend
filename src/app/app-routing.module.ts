import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppointmentAddComponent} from './appointment/appointment-add/appointment-add.component';
import {ServiceAddComponent} from './service/service-add/service-add.component';
import {DoctorAddComponent} from './doctor/doctor-add/doctor-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'new-appointment', component: AppointmentAddComponent},
  {path: 'new-service', component: ServiceAddComponent},
  {path: 'new-doctor', component: DoctorAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
