import {Component, OnInit} from '@angular/core';
import {GuestService} from '../service/guest.service';
import {GuestDetails} from '../model/guest-details';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {
  guestDetails: GuestDetails[] | undefined;

  constructor(private guestService: GuestService) {
  }

  ngOnInit(): void {
    this.getGuestDetails();
  }

  getGuestDetails(): void {

    this.guestService.getBySearchCriteria(null, null,
      null, null).subscribe((data: GuestDetails[]) => {
      this.guestDetails = data;
      console.log(this.guestDetails);
    }, error => {

    });
  }

  editGuest(guestId: any): void {

  }

  deleteGuest(guestId: any): void {
    this.guestService.deleteGuest(guestId).subscribe(() => {
      this.getGuestDetails();
    });
  }
}