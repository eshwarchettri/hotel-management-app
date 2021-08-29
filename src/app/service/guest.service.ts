import {Injectable} from '@angular/core';
import {BaseCRUDService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {apiUrls} from '../configs/api-url.config';
import {map} from 'rxjs/operators';
import {GuestDetails} from '../model/guest-details';

@Injectable({
  providedIn: 'root'
})
export class GuestService extends BaseCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}/${apiUrls.guestServiceUrl}`);
  }

  deleteGuest(id: any, reasonForDelete: string): any {
    return this.http.delete(`${this.restUrl}/delete-guest/${id}?reasonForDelete=${reasonForDelete}`).pipe(map((res: any) => res));
  }

  saveGuest(guestData: GuestDetails): any {
    return this.http.post(`${this.restUrl}/save-guest`, guestData).pipe(map((res: any) => res));
  }

  guestCheckIn(id: any): any {
    return this.http.put(`${this.restUrl}/guest-checkin/${id}`, null).pipe(map((res: any) => res));
  }
  getGuest(id: any): any {
    return this.http.get(`${this.restUrl}/${id}`).pipe(map((res: any) => res));
  }
}
