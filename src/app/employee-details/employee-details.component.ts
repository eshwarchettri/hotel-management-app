import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: Employee[] | any;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  deleteEmployee(employeeId: any): void {
    this.employeeService.deleteGuest(employeeId).subscribe(() => {
      this.getEmployees();
    });
  }

  private getEmployees(): any {
    this.employeeService.getBySearchCriteria(null, null, null, null).subscribe((value: Employee[]) => {
      this.employeeDetails = value;
    });
  }

  createEmployee(): void {
    this.router.navigate(['create-employee']);
  }
}
