import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-list',
  standalone: true,
  imports: [],
  templateUrl: './title-list.component.html',
  styleUrl: './title-list.component.css'
})
export class TitleListComponent {

  @Input() titleText: string = 'Insert title';
  @Input() bntLabel: string = 'label';

}
