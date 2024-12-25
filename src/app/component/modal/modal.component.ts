import {Component, ElementRef, Input, OnInit, Output, ViewChild, ViewRef} from '@angular/core';
import {NgIf} from "@angular/common";
import EventEmitter from "node:events";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  @Input({required: true}) isCloseOnModal!: boolean;
  @Input({required: true}) idModal!: string;
  @Input({required: true}) titleModal!: string;
  @Input() options!: {
    size?: 'modal-sm' | 'modal-lg' | 'modal-xl'| '';
    footer?: boolean;
  } | undefined;

  constructor() {}
  ngOnInit() {
    if(!this.options){
      this.options = {
        size: '',
        footer: true,
      }
    }

  }

  test(){
    console.log('hello');
  }
}
