import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { TitleListComponent } from '@modules/shared/components/title-list/title-list.component';
import { ListAppsComponent } from "./components/list-apps/list-apps.component";
import { AuthService } from '@modules/auth/services/auth.service';
import { UserLogged } from '@modules/auth/interfaces/userLogged.interface';


@Component({
  selector: 'list-apps-page',
  standalone: true,
  imports: [TitleListComponent, NgIf, ListAppsComponent],
  templateUrl: './list-apps-page.component.html',
  styleUrl: './list-apps-page.component.css'
})
export class ListAppsPageComponent {

  user!: UserLogged
  
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.user = this.authService.userLogged;
  }
}
