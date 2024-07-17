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

  @Output() onConfirm = new EventEmitter<string>();

  onDelete(): void {
    const values = this.modalBodyText.split('-');
    this.onConfirm.emit(values[0].trim())
  }

}
