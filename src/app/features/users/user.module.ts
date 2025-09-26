import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookATableComponent } from './components/book-a-table/book-a-table.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';


const routes: Routes = [
  {
    path: "", component: LayoutsComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'bookatable', component: BookATableComponent },
      { path: 'chefs', component: ChefsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'contact', component: ContactComponent },

      { path: '', pathMatch: 'full', redirectTo: 'home' }

    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})

export class UserModule {

}







