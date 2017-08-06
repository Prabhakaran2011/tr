import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { PagenotfoundComponent } from '../../components/pagenotfound/pagenotfound.component';
import { QueryUsComponent } from '../../components/query-us/query-us.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'query', component: QueryUsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers:[]
})
export class AppRoutingModule { }
