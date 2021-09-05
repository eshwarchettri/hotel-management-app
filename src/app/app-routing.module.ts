import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {GuestDetailsComponent} from './guest-details/guest-details.component';
import {GuestBookingComponent} from './guest-booking/guest-booking.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'guest-details', component: GuestDetailsComponent},
  {path: 'guest-booking', component: GuestBookingComponent},
  {path: 'guest-booking/:id', component: GuestBookingComponent},
  {path: 'employee-details', component: EmployeeDetailsComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
