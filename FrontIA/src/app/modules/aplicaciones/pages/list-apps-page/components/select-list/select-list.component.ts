import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OpcsStatus } from '@modules/aplicaciones/interfaces/aplicaciones.interfaces';
import { ModalConfirmationComponent } from '@modules/shared/components/modal-confirmation/modal-confirmation.component';

import { StatusPipe } from '../../pipes/status.pipe';


@Component({
  selector: 'select-list',
  standalone: true,
  imports: [StatusPipe, CommonModule, FormsModule, ModalConfirmationComponent],
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.css'
})
export class SelectListComponent {

  @Input() currentValue: number = 2;
  @Output() newValue = new EventEmitter<OpcsStatus>();
  optionsStatus = [2,3,4]
  options: OpcsStatus =  {
    newStatus: -1,
    firstValue: -1
  }
   
  ngOnInit(): void {
    this.options.firstValue = +this.currentValue;
  }

  onChange(value: number){
    this.options.newStatus = +value;
    this.newValue.emit(this.options);
  }
}
