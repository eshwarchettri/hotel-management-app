import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guest-booking',
  templateUrl: './guest-booking.component.html',
  styleUrls: ['./guest-booking.component.css']
})
export class GuestBookingComponent implements OnInit {
  guestDetails: any;

  constructor() {
  }

  ngOnInit(): void {
    this.initGuestDetailForm();
  }

  initGuestDetailForm(): void {
    this.guestDetails = new FormBuilder().group({
      guestFirstName: new FormControl(''),
      guestLastName: new FormControl(''),
      address: new FormControl(''),
      secondAddress: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      checkoutDateTime: new FormControl(''),
      checkinDateTime: new FormControl(''),
      preferredRoomType: new FormControl(''),
      adults: new FormControl(''),
      children: new FormControl(''),
      specialInstructions: new FormControl('')
    });
  }

  saveOrUpdateGuest(): void {
console.log(this.guestDetails?.value);
  }
}
