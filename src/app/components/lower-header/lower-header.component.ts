import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lower-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './lower-header.component.html',
  styleUrl: './lower-header.component.scss'
})
export class LowerHeaderComponent {

}
