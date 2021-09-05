import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeDetails: FormGroup | any;
  employee: Employee | any;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.initGuestDetailForm();
  }

  saveOrUpdateEmployee(): void {
    this.employeeDetails.markAllAsTouched();
    if (this.employeeDetails?.valid) {
      this.employee = this.employeeDetails.value;

      this.employeeService.saveEmployee(this.employee).subscribe(() => {
        this.router.navigate(['employee-details']);
      }, (error: any) => {
        console.log(error);
      });
    }
  }

  get employeeForm(): any {
    return this.employeeDetails.controls;
  }

  initGuestDetailForm(): void {
    this.employeeDetails = new FormBuilder().group({
      employeeName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      privilege: new FormControl('', [Validators.required])
    });
  }


}
