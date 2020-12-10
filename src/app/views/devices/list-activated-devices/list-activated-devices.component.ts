import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-activated-devices',
  templateUrl: './list-activated-devices.component.html',
  styleUrls: ['./list-activated-devices.component.css']
})
export class ListActivatedDevicesComponent implements OnInit {

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
