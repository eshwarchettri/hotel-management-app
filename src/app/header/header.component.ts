import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogoutButton = true;

  constructor() {
  }


  ngOnInit(): void {
  }

  logOut(): void {
    sessionStorage.clear();
  }

}
