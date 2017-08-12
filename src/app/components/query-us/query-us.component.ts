import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-query-us',
  templateUrl: './query-us.component.html',
  styleUrls: ['./query-us.component.css']
})
export class QueryUsComponent{
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  nameFormControl = new FormControl('', [
    Validators.required]);
  textFormControl = new FormControl('', [
    Validators.required]);
}
