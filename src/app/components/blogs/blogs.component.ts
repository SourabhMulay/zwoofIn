import { Component } from '@angular/core';
import { ViewcardComponent } from '../viewcard/viewcard.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-blogs',
  imports: [ViewcardComponent, CardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
