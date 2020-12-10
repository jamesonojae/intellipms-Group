import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-timeclock-dashboard',
  templateUrl: './timeclock-dashboard.component.html',
  styleUrls: ['./timeclock-dashboard.component.css']
})
export class TimeclockDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dashboard() {
    this.router.navigate(['/']);
  }
}
