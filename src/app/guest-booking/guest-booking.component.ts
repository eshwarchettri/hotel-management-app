import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GuestService} from '../service/guest.service';
import {GuestDetails} from '../model/guest-details';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-guest-booking',
  templateUrl: './guest-booking.component.html',
  styleUrls: ['./guest-booking.component.css']
})
export class GuestBookingComponent implements OnInit {
  guestDetails: FormGroup | any;
  guestData: GuestDetails | any;
  id: any;

  constructor(private guestService: GuestService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit(): void {
    this.initGuestDetailForm();
    if (this.id !== null || true) {
      this.getGuestDetail(this.id);
    }
  }

  initGuestDetailForm(): void {
    this.guestDetails = new FormBuilder().group({
      guestFirstName: new FormControl('', [Validators.required]),
      guestLastName: new FormControl('', [Validators.required]),
      firstAddress: new FormControl('', [Validators.required]),
      secondAddress: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      checkoutDateTime: new FormControl('', [Validators.required]),
      checkinDateTime: new FormControl('', [Validators.required]),
      roomPreferences: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', [Validators.required]),
      specialInstruction: new FormControl('', [Validators.maxLength(140)])
    });
  }

  saveOrUpdateGuest(): void {
    this.guestDetails.markAllAsTouched();
    if (this.guestDetails?.valid) {
      this.guestData = this.guestDetails.value;
      if (this.id) {
        this.guestData.guestId = this.id;
      }
      this.guestService.saveGuest(this.guestData).subscribe(() => {
        this.router.navigate(['guest-details']);
      }, (error: any) => {
        console.log(error);
      });
    }

  }

  private getGuestDetail(id: any): any {
    this.guestService.getGuest(id).subscribe((res: any) => {
      this.guestDetails.patchValue(res);
    }, (error: any) => {
      console.log(error);
    });
  }
  get guestBookingForm(): any {
    console.log(this.guestDetails.controls);
    return this.guestDetails.controls;
  }
}
