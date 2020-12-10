import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-timeclock-login',
  templateUrl: './timeclock-login.component.html',
  styleUrls: ['./timeclock-login.component.css']
})
export class TimeclockLoginComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit(): void {
  }

  loginToTimeClock(): void {
    this.router.navigate(['/timeclock/dashboard']);
  }
}
