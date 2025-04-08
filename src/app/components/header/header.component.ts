import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowerHeaderComponent } from '../lower-header/lower-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LowerHeaderComponent,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headername:string="Saurabh Mulay";
  
  header_items:string[]=[...this.headername];

  constructor(){
    this.print(this.headername);
  
  }
  
  print(statement:string):void{
    console.log(statement); 
  }

}
