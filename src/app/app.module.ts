import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { QueryUsComponent } from './components/query-us/query-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// routing
import { AppRoutingModule } from './shared/app-routing/app-routing.module';
import { RouterLinkActive, RouterModule } from '@angular/router';

// services
import { HttpModule } from '@angular/http';

// angular material
import { MaterialModule } from '@angular/material';

// angular2 firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database'

// contant file
import { constants } from "./shared/contants";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    QueryUsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule, 
    HttpModule,
    RouterModule,    
    AngularFireModule.initializeApp(constants.firebaseConfig),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log(constants);
  }
}
