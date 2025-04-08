import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MiscComponent } from './components/misc/misc.component';

export const routes: Routes = [
    // {
    //     path: '', 
    //     component: HeaderComponent, // AppComponent will manage layout
    //     children: [
    //         { path: 'home', component: HomeComponent },
           
    //         { path: 'about', component: AboutComponent },
    //         { path: 'blog', component: BlogsComponent },
    //     ]
    // },
    // { path: '**', redirectTo: '/home' },
    // { path: 'contact', component: ContactComponent },
    //  // Default route in case of invalid paths

    {path:'', component:HeaderComponent,
        children:[
            {   path:'contact',
                component:ContactComponent
            },
            {path:'home', component:HomeComponent},
            {path:'blogs', component:BlogsComponent},
            {path:'about', component:AboutComponent},
            {path:'misc', component:MiscComponent}
        ]    
    },
   

];
