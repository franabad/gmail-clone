import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Menu, CircleHelp, Search, SlidersHorizontal, Settings, Sparkle, Grip } from 'lucide-angular';

@Component({
  selector: 'app-topnav',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent {
  readonly menuIcon = Menu;
  readonly helpIcon = CircleHelp;
  readonly searchIcon = Search;
  readonly filterIcon = SlidersHorizontal;
  readonly settingsIcon = Settings;
  readonly sparkleIcon = Sparkle;
  readonly gripIcon = Grip;
}
