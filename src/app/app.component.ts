import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
// import { EmailsComponent } from './layout/emails/emails.component';
import { AddonsComponent } from './layout/addons/addons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopnavComponent, SidenavComponent, AddonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gmail-clone';
}
