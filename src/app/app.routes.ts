import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path:'contact', component:ContactComponent},
    {path:'about', component:AboutComponent},
    {path:'blog', component:BlogsComponent},
    {path:'', component:HomeComponent}
];
