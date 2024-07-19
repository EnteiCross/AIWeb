import { Component } from '@angular/core';
import { TitleListComponent } from "../../../shared/components/title-list/title-list.component";
import { ListUsuariosComponent } from "./components/list-usuarios/list-usuarios.component";
import { AuthService } from '@modules/auth/services/auth.service';
import { UserLogged } from '@modules/auth/interfaces/userLogged.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuarios-page',
  standalone: true,
  imports: [TitleListComponent, ListUsuariosComponent],
  templateUrl: './list-usuarios-page.component.html',
  styleUrl: './list-usuarios-page.component.css'
})
export class ListUsuariosPageComponent {
  user!: UserLogged | null;
  
  constructor(
    private router: Router,
    private authService: AuthService){}
  
  ngOnInit(): void {
    this.user = this.authService.userLogged;
    if(!this.user){
      // this.router.navigate(['/auth/login'])
    }
  }
}
