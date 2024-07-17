import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aplication } from '../../interfaces/aplicaciones.interfaces';

@Component({
  selector: 'app-list-apps-page',
  standalone: true,
  imports: [],
  templateUrl: './list-apps-page.component.html',
  styleUrl: './list-apps-page.component.css'
})
export class ListAppsPageComponent {
  aplications: Aplication[] = [];

  constructor(private router: Router){}
  
  ngOnInit(): void {
  }

  onEdit(id: number): void {
    console.log(`camino a form/${id}`);
    //TODO: implementar redireccion al formulario 
    // this.router.navigate([`/form/edit/${id}`]) 
  }

  onDelete(id: number): void {
    console.log(`${id} delete`);
    //TODO: Implemetar alerta de confirmacion para borrar
    //TODO: implementar llamada a servicio delente
  }
}
