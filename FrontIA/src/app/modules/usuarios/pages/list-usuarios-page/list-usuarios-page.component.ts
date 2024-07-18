import { Component } from '@angular/core';
import { TitleListComponent } from "../../../shared/components/title-list/title-list.component";
import { ListUsuariosComponent } from "./components/list-usuarios/list-usuarios.component";
import { AuthService } from '@modules/auth/services/auth.service';
import { UserLogged } from '@modules/auth/interfaces/userLogged.interface';

@Component({
  selector: 'app-list-usuarios-page',
  standalone: true,
  imports: [TitleListComponent, ListUsuariosComponent],
  templateUrl: './list-usuarios-page.component.html',
  styleUrl: './list-usuarios-page.component.css'
})
export class ListUsuariosPageComponent {
  user!: UserLogged;
  
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.user = this.authService.userLogged;
  }
}
