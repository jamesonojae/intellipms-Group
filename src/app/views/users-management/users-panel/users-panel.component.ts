import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

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
