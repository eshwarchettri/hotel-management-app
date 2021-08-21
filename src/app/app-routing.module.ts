import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {GuestDetailsComponent} from './guest-details/guest-details.component';
import {GuestBookingComponent} from './guest-booking/guest-booking.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'guest-details', component: GuestDetailsComponent},
  {path: 'guest-booking', component: GuestBookingComponent},
  {path: 'guest-booking/:id', component: GuestBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
