import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8', 'Access-Control-Allow-Origin': '*' });
  private options = new RequestOptions({ headers: this.headers });

  // private instance variable to hold base url
  private accountsUrl = 'http://salesforcedemo.cloudhub.io/salesforce';

  constructor(private http: Http) { }

  // get all accounts
  getAccounts() {
    return this.http.get(this.accountsUrl).map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
