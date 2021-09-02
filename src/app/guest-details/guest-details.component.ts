import {Component, OnInit} from '@angular/core';
import {GuestService} from '../service/guest.service';
import {GuestDetails} from '../model/guest-details';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {
  guestDetails: GuestDetails[] | any ;
  reasonToDeleteForm: FormGroup | any;
  totalElements: any;
  currentPage = 1;

  constructor(private guestService: GuestService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getGuestDetails();
    this.reasonToDeleteForm = new FormBuilder().group({
      reasonForCancel: new FormControl('', [Validators.required])
    });
  }

  get reasonForm(): any {
    return this.reasonToDeleteForm.controls;
  }

  getGuestDetails(): void {

    this.guestService.getBySearchCriteria(null, 'checkinDateTime',
      this.currentPage, 5).subscribe((data: any) => {
      this.guestDetails = data.content;
      this.totalElements = data.totalElements;
    }, error => {

    });
  }

  editGuest(guestId: any): void {
    this.router.navigate(['guest-booking', guestId]);
  }


  deleteGuest(guestId: any, content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.guestService.deleteGuest(guestId, this.reasonToDeleteForm.controls.reasonForCancel.value).subscribe(() => {
        this.getGuestDetails();
      });
    });
  }

  isFormValid(): boolean {
    return this.reasonToDeleteForm.controls.reasonForCancel.errors;
  }

  guestCheckIn(guestId: any): void {
    this.guestService.guestCheckIn(guestId).subscribe(() => {
      this.getGuestDetails();
    });
  }

  guestCheckOut(guestId: any): void {
    this.guestService.deleteGuest(guestId, 'Guest Checked Out').subscribe(() => {
      this.getGuestDetails();
    });
  }

  pageChanged($event: any): any {
    this.currentPage = $event;
    this.getGuestDetails();
  }
}
