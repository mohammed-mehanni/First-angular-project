import { HeaderComponent } from './features/users/shared/header/header.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/users/shared/footer/footer.component';
import { HomeComponent } from './features/users/components/home/home.component';
import { AboutComponent } from './features/users/components/about/about.component';
import { MenuComponent } from './features/users/components/menu/menu.component';
import { BookATableComponent } from './features/users/components/book-a-table/book-a-table.component';
import { ChefsComponent } from './features/users/components/chefs/chefs.component';
import { EventsComponent } from './features/users/components/events/events.component';
import { ContactComponent } from './features/users/components/contact/contact.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-app';
}
