import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newemail',
  templateUrl: './newemail.component.html',
  styleUrls: ['./newemail.component.css']
})
export class NewemailComponent implements OnInit {

  email = "";
  message = "";
  subject = "";
  loading = false;
  success = false;

  constructor() { }

  ngOnInit(): void {
  }

  resetbutton() {
    this.email = "";
    this.message = "";
    this.subject = "";
  }

  send() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      setTimeout(() => {
        this.success = false;
        this.resetbutton();
      }, 3000);
    }, 3000);
  }

}
