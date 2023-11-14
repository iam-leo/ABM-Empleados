import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.css']
})
export class ConfirmMessageComponent {
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() deleteConfirmed = new EventEmitter<boolean>();
  @Input() name: string = '';
  @Input() lastname: string = '';

  closeDeleteModal(evt: any){
    if(evt.target.id === 'confirm-modal'){
      this.cancelDelete();
    }
  }

  confirmedDelete(){
    //Emitimos la confirmación de eliminacion del usuario al componente padre
    this.deleteConfirmed.emit(true);
  }

  cancelDelete(){
    //Emitimos la cancelación de eliminacion del usuario al componente padre
    this.closeModal.emit(false);
  }
}
