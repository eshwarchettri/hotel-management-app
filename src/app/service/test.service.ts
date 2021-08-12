import { Injectable } from '@angular/core';
import {apiUrls} from '../configs/api-url.config';
import {BaseCRUDService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseCRUDService{

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}/${apiUrls.testUrl}`);
  }
}
