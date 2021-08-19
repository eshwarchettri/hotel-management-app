import {Room} from './room';

export class GuestDetails {
  guestId: any;
  guestFirstName: any;
  guestLastName: any;
  checkinDateTime: any;
  checkoutDateTime: any;
  room: Room | undefined;
  isDeleted: any;
  address: any;
  secondAddress: any;
  city: any;
  state: any;
  zipCode: any;
  phoneNumber: any;
  email: any;
  preferredRoomType: any;
  adults: any;
  children: any;
  specialInstructions: any;
}
