import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
// ----this user comes from the form from the html and its  processed in the app.component.ts (go and check how)
//         |
//         |
  signup(user) {
    return this.http.post(`/signup`, user)

    //.map takes response from '/signup' from my express
    //and converts it to a json file

      .map(res => res.json())

      //catch triggers whenever there's an error and calls
      //this function handleError

      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
