import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-security-panel',
  templateUrl: './security-panel.component.html',
  styleUrls: ['./security-panel.component.css']
})
export class SecurityPanelComponent implements OnInit {

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
