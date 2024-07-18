import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@modules/usuarios/interface/usuario.interface';
import { UsuariosService } from '@modules/usuarios/services/usuarios.service';
import { ModalConfirmationComponent } from "../../../../../shared/components/modal-confirmation/modal-confirmation.component";
import { PaginatorComponent } from "../../../../../shared/components/paginator/paginator.component";

@Component({
  selector: 'list-usuarios',
  standalone: true,
  imports: [NgFor, ModalConfirmationComponent, NgClass, PaginatorComponent],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export class ListUsuariosComponent implements OnInit{

  users!: Usuario[];
  modalBodyText: string = '';
  idToDelete: string = '';
  isDeletingUser: boolean = false;

  currentPage: number = 1;
  totalItems: number = 0;

  constructor(
      private usuariosService: UsuariosService,
      private router: Router
    ){}
  
  ngOnInit(): void {
    this.onGetUsuarios();
  }
  
  onGetUsuarios(): void{
    this.usuariosService.getUsuarios(this.currentPage).subscribe(({data,total}) => {
      this.users = data;
      this.totalItems  = total;
    });  
  }

  onEdit(idUser: string): void{
    this.router.navigate([`/apps/users/edit/${idUser}`]);
  }

  onSetTextModal(user: Usuario):void {
    this.modalBodyText = `¿Deseas eliminar al usuario ${user.username}?`
    this.idToDelete = user.usernumber;
  }

  onModalAction(value: boolean): void{
    if(value){
      this.isDeletingUser = true;
      this.usuariosService.deleteUsuario(this.idToDelete).subscribe((resp) => {
        console.log('aqui confirmaremos que se esta eliminando');
        console.log(resp);
        
        this.isDeletingUser = false;
        this.cleandData();
        this.onGetUsuarios();
      })
    }else{
      this.cleandData();
    }    
  }

  onPageChange(newPage: number): void {
    if(newPage === this.currentPage) return;
    this.currentPage = newPage;
    this.onGetUsuarios();    
  }

  cleandData(): void{
    this.modalBodyText = '';
    this.idToDelete = '';
  }

  trackByFn(index: number, user: Usuario): string{
    return `${user.usernumber};`
  }
}
