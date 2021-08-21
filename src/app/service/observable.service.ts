import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ObservableService {
  private login = new BehaviorSubject(false);
  readonly isLoggedIn$ = this.login.asObservable();
  private loginSuccessful = false;

  constructor() {
  }

  successFullLogin(): any {
    this.loginSuccessful = true;
    this.login.next(this.loginSuccessful);
  }

  successFullLogOut(): void {
    this.login.next(false);

  }
}
