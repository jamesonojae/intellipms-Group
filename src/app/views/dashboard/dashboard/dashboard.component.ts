import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private  modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLg(content: any) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
    }, (reason) => {
    });
  }
  open(content: any) {
    this.modalService.open(content, {size: 'md'}).result.then((result) => {
    }, (reason) => {
    });
  }
}
