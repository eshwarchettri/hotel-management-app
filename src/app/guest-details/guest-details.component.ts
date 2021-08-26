import {Component, OnInit} from '@angular/core';
import {GuestService} from '../service/guest.service';
import {GuestDetails} from '../model/guest-details';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {
  guestDetails: GuestDetails[] | undefined;
   closeResult = '';

  constructor(private guestService: GuestService, private router: Router, private modalService: NgbModal) {
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
      this.router.navigate(['guest-booking', guestId]);
  }


  deleteGuest(guestId: any, content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
      this.guestService.deleteGuest(guestId).subscribe(() => {
        this.getGuestDetails();
      });
      });
}

}
