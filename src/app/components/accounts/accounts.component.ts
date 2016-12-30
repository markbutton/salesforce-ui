import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { List } from 'immutable';

import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [AccountService]
})
export class AccountsComponent implements OnInit {
    // Stream of observable accounts
    private _accounts: BehaviorSubject<List<Account>> = new BehaviorSubject(List([]));
    public accounts: Observable<List<Account>> = this._accounts.asObservable();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    // this.accounts = this.accountService.accounts;
    this.loadInitialData();
  }

  private loadInitialData() {
        // Get accounts and subscribe
        this.accountService.getAccounts()
            .subscribe(
            res => {
                let accounts = res;
                this._accounts.next(accounts);
            },
            err => console.log('Error retrieving accounts')
            );
    }

}
