import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserLogged } from '@modules/auth/interfaces/userLogged.interface';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,NgFor,TitleCasePipe],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent implements OnInit{

  userLogged!: UserLogged | null;
  menuSidebar = [
    { path: '/apps/home', name: 'Inicio'},
    { path: '/apps/list-apps', name: 'Aplicaciones'},
  ];

  constructor(
    private router: Router,
    private authService: AuthService){}
  
  ngOnInit(): void {
    this.userLogged = this.authService.userLogged;
    if(this.userLogged){
      if(this.userLogged.rol === 'Administrador'){
        this.menuSidebar.push(
          { path: '/apps/users/list-users', name: 'Usuarios'},
        )
      }
    }
  }

  
  onLogout():void {
    this.authService.onLogout();
    this.router.navigate(['/auth/login']);
  }
}
