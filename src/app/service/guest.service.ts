import { Injectable } from '@angular/core';
import {BaseCRUDService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {apiUrls} from '../configs/api-url.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService extends BaseCRUDService{

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}/${apiUrls.guestServiceUrl}`);
  }
deleteGuest(id: any): any  {
  return this.http.delete(`${this.restUrl}/delete-guest/${id}`).pipe(map((res: any) => res));
}
}
