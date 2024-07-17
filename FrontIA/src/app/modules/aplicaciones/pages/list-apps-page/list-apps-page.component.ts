import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aplication, StatusApps } from '../../interfaces/aplicaciones.interfaces';
import { TitleListComponent } from '@modules/shared/components/title-list/title-list.component';
import { AplicacionService } from '@modules/aplicaciones/services/aplicacion.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ModalConfirmationComponent } from "../../../shared/components/modal-confirmation/modal-confirmation.component";
import { PaginatorComponent } from '@modules/shared/componentes/paginator/paginator.component';

@Component({
  selector: 'app-list-apps-page',
  standalone: true,
  imports: [TitleListComponent, NgIf, NgFor, ModalConfirmationComponent,NgClass, PaginatorComponent],
  templateUrl: './list-apps-page.component.html',
  styleUrl: './list-apps-page.component.css'
})
export class ListAppsPageComponent {
  aplications: Aplication[] = [];
  isLoadingData: boolean = true;
  modalBodyText: string = '';
  isDeleting: boolean = false;
  idToDelete: number = -1;
  currentPage: number = 1
  totalItems: number = 0

  statusOpc = {
    DONE: StatusApps.DONE,
    PROGRESS: StatusApps.PROGRESS,
  }

  constructor(
    private router: Router,
    private aplicacionService: AplicacionService
  ){}
  
  ngOnInit(): void {
    this.onGetAplicaciones();
  }

  onGetAplicaciones(): void {
    this.aplicacionService.getAplicaciones(this.currentPage)
    .subscribe(({data,total}) => {
      console.log({data,total})
      this.aplications = data;
      this.totalItems = total;
      this.isLoadingData = false;
    })
  }

  onEdit(id: number): void {
    if(this.isDeleting) return
    this.router.navigate([`/apps/edit/${id}`]) 
  }
  
  onSetDelete(id: number, name: string): void {
    this.idToDelete = id;
    this.modalBodyText = `${id} - ${name}`;
  }
  
  onDelete(id: string): void {
    this.isDeleting = true;
    this.aplicacionService.deleteAplicacion(id)
      .subscribe(resp => {
        this.isDeleting = false
        this.onGetAplicaciones();
      })
  }

  trackByFn(index: number, aplicacion: Aplication): string{
    return `${aplicacion.id}`
  }

  onPageChange(newPage: number): void {
    if(newPage === this.currentPage) return;
    this.currentPage = newPage;
    this.onGetAplicaciones();
    
  }
}
