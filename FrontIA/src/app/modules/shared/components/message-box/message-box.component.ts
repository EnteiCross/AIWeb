import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-box',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent implements OnInit{
  @Input() message: string = '';
  isShow: boolean = false;

  ngOnInit(): void {
    if(this.message){
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 4800);
    }
  }
}
