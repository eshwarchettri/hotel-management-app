import {Injectable} from '@angular/core';
import {BaseCRUDService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {apiUrls} from '../configs/api-url.config';
import {map} from 'rxjs/operators';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseCRUDService {

  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}/${apiUrls.createEmployee}`);
  }
  saveEmployee(employee: Employee): any {
    return this.http.post(`${this.restUrl}/create-employee`, employee).pipe(map((res: any) => res));
  }

  deleteGuest(id: any): any {
    return this.http.delete(`${this.restUrl}/delete-employee/${id}`).pipe(map((res: any) => res));
  }

  changePassword(employee: Employee, id: any): any {
    return this.http.put(`${this.restUrl}/update-password/${id}`, employee).pipe(map((res: any) => res));
  }
}
