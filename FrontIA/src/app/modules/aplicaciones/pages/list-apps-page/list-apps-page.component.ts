import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { TitleListComponent } from '@modules/shared/components/title-list/title-list.component';
import { AplicacionService } from '@modules/aplicaciones/services/aplicacion.service';
import { UserLogged } from '@modules/aplicaciones/interfaces/auth.interfaces';
import { ListAppsComponent } from "./components/list-apps/list-apps.component";


@Component({
  selector: 'list-apps-page',
  standalone: true,
  imports: [TitleListComponent, NgIf, ListAppsComponent],
  templateUrl: './list-apps-page.component.html',
  styleUrl: './list-apps-page.component.css'
})
export class ListAppsPageComponent {

  user!: UserLogged
  
  constructor(private aplicacionService: AplicacionService){}
  
  ngOnInit(): void {
    this.user = this.aplicacionService.userLogged;
  }
}
