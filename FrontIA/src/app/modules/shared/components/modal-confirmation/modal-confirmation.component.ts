import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.css'
})
export class ModalConfirmationComponent {

  @Input() modalTitle: string = '';
  @Input() modalBodyText: string = '';
  @Input() modalCloseBtnText: string = 'Close';
  @Input() modalConfirmBtnText: string = 'Ok';

  @Output() onModalAction = new EventEmitter<boolean>();

  onDelete(): void {
    this.onModalAction.emit(true);
  }

  onCancel(): void{
    this.onModalAction.emit(false);    
  }
}
