import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { QueryUsComponent } from './components/query-us/query-us.component';

// routing
import { AppRoutingModule } from './shared/app-routing/app-routing.module';
import { RouterLinkActive, RouterModule } from '@angular/router';

// services
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    QueryUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
