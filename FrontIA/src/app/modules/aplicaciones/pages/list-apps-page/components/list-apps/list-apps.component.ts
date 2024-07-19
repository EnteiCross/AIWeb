import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Aplication, OpcsStatus } from '@modules/aplicaciones/interfaces/aplicaciones.interfaces';
import { AplicacionService } from '@modules/aplicaciones/services/aplicacion.service';
import { PaginatorComponent } from '@modules/shared/components/paginator/paginator.component';
import { ModalConfirmationComponent } from '@modules/shared/components/modal-confirmation/modal-confirmation.component';

import { SelectListComponent } from "../select-list/select-list.component";
import { StatusPipe } from '../../pipes/status.pipe';
import { AuthService } from '@modules/auth/services/auth.service';
import { UserLogged } from '@modules/auth/interfaces/userLogged.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'list-apps',
  standalone: true,
  imports: [PaginatorComponent, NgFor, NgIf, StatusPipe, SelectListComponent, ModalConfirmationComponent],
  templateUrl: './list-apps.component.html',
  styleUrl: './list-apps.component.css'
})
export class ListAppsComponent {
  @ViewChild('btnModal') btnModal!: ElementRef<HTMLAnchorElement>;

  user!: UserLogged | null;
  aplications: Aplication[] = [];
  
  currentPage: number = 1;
  totalItems: number = 0;
  
  modalBodyText: string = '';
  
  infoChange: { id: number, newStatus: number, firstValue: number } = {
      id: -1,
      newStatus: -1,
      firstValue: -1
  };
  
  constructor(
      private router: Router,
      private aplicacionService: AplicacionService,
      private authService: AuthService ){}

  ngOnInit(): void {
    this.user = this.authService.userLogged;
    if(!this.user){
      // this.router.navigate(['/auth/login'])
    }
    this.onGetAplicaciones();
  }

  onGetAplicaciones(): void {
    this.aplicacionService.getAplicaciones(this.currentPage)
    .subscribe(({data,total}) => {
      this.aplications = data;
      this.totalItems  = total;
    });
  }
  
  onChangeStatus(objStatus: OpcsStatus,app: Aplication): void{
    if(objStatus.newStatus === 3){
      this.infoChange = { id: app.id, ...objStatus };
      app.status = objStatus.newStatus;
      this.modalBodyText = `¿Deseas rechazar la aplicación ${app.id} - ${app.name}?`
      this.btnModal.nativeElement.click();
    }else{
      this.aplicacionService.setStatusAplicacion(app.id, objStatus.newStatus);
    }
  }
  
  onModalAction(value: boolean): void{    
    if(value){
      this.aplicacionService.setStatusAplicacion(this.infoChange.id,this.infoChange.newStatus)
    }else{
      this.resetStatusAplicacion();
    }
  }
  
  resetStatusAplicacion(): void {
    const index = this.aplications.findIndex(app => app.id === this.infoChange.id)
    this.aplications[index].status = this.infoChange.firstValue;    
  }
  
  onPageChange(newPage: number): void {
    if(newPage === this.currentPage) return;
    this.currentPage = newPage;
    this.onGetAplicaciones();    
  }

  trackByFn(index: number, aplicacion: Aplication): string{
    return `${aplicacion.id}`
  }
}
