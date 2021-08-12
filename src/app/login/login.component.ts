import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TestService} from '../service/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private testService: TestService) {
  }

  ngOnInit(): void {
  }

  clicked(): void {
    this.testService.getBySearchCriteria(null, null, null, null).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
    console.log('test');
    this.router.navigate(['home']);
  }
}
