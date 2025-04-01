import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
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
