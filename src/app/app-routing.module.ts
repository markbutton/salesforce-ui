import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent }   from './components/accounts/accounts.component';
import { HomeComponent }  from './components/home/home.component';

const routes: Routes = [
    {
        path: 'accounts',
        component: AccountsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, AccountsComponent];
