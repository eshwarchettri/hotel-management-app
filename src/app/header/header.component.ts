import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ObservableService} from '../service/observable.service';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoginSuccess = false;
  activeTab = 'home';
  employeeName: any;

  constructor(private observableService: ObservableService, private router: Router) {
    this.observableService.isLoggedIn$.subscribe((res: boolean) => {
      this.employeeName = sessionStorage.getItem('employeeName');
      this.isLoginSuccess = res;

    });
  }


  ngOnInit(): void {
  }

  logOut(): void {
    sessionStorage.clear();
    this.isLoginSuccess = false;
    this.router.navigate(['']);
  }

  active(tabName: string): any {
    this.activeTab = tabName;
  }
}
