import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {ObservableService} from "../service/observable.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = 'password';
  show = false;
  showEye = false;
  private credential = {userName: '', password: ''};
   errorMessage = '' ;
   showErrorMessage = false;

  constructor(private router: Router,
              private loginService: LoginService,
              private observableService: ObservableService
  ) {
  }

  loginForm: any;

  ngOnInit(): void {
    this.initLoginForm();
  }

  get loginInfo(): any {
    return this.loginForm.controls;
  }

  onClick(): any {
    if (this.password === 'password') {
      this.password = 'text';
      this.showEye = true;
    } else {
      this.password = 'password';
      this.showEye = false;
    }
  }

  initLoginForm(): void {
    this.loginForm = new FormBuilder().group({
      userName: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(18)])
    });
  }

  onSubmit(): void {
    this.credential.userName = this.loginForm.controls.userName.value;
    this.credential.password = this.loginForm.controls.password.value;
    this.loginService.post(this.credential).subscribe(() => {
      this.observableService.successFullLogin();
      this.router.navigate(['home']);
      // tslint:disable-next-line:no-shadowed-variable
    }, (error: any) => {
      console.log(error);
      this.showErrorMessage = true;
      this.errorMessage = error.error.message;
    });
  }
}
