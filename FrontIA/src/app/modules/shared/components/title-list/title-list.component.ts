import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserLogged } from '@modules/auth/interfaces/userLogged.interface';

@Component({
  selector: 'title-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './title-list.component.html',
  styleUrl: './title-list.component.css'
})
export class TitleListComponent {

  @Input() titleText: string = 'Insert title';
  @Input() btnLabel: string = 'label';
  @Input() btnRoute: string = '/';
  @Input() user!: UserLogged;

}
