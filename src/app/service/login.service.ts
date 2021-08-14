import { Injectable } from '@angular/core';
import {BaseCRUDService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {apiUrls} from '../configs/api-url.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseCRUDService{

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}/${apiUrls.authenticationUrl}`);
  }}
