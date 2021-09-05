import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  employeeDetails: FormGroup | any;
  employee: Employee | any;
  id: any;
  errorMessage = '' ;
  showErrorMessage = false;
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.id = sessionStorage.getItem('employeeId');
  }

  ngOnInit(): void {
    this.initGuestDetailForm();
  }

  saveOrUpdateEmployee(): void {
    this.employeeDetails.markAllAsTouched();
    if (this.employeeDetails?.valid) {
      this.employee = this.employeeDetails.value;

      this.employeeService.changePassword(this.employee, this.id).subscribe(() => {
        this.router.navigate(['employee-details']);
      }, (error: any) => {
        this.showErrorMessage = true;
        this.errorMessage = error.error.message;
      });
    }
  }

  get employeeForm(): any {
    return this.employeeDetails.controls;
  }

  initGuestDetailForm(): void {
    this.employeeDetails = new FormBuilder().group({
      password: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

}
