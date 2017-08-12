import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { QueryUsComponent } from '../query-us/query-us.component';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public dialog:MdDialog){

  }
  openDialog() {
    this.dialog.open(QueryUsComponent);
  }
}