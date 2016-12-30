import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { HomeComponent } from './components/home/home.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StickyModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
