import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Pencil } from 'lucide-angular';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../icons/icons.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, LucideAngularModule, RouterLink, RouterLinkActive, MatIconModule, IconsComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  readonly pencilIcon = Pencil

  constructor(private router: Router) { }

  currentUrl: string = '';

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }

  items = [
    {
      label: 'Inbox',
      icon: 'inbox',
      href: '/mail/inbox',
    },
    {
      label: 'Starred',
      icon: 'grade',
      href: '/mail/starred',
    },
    {
      label: 'Snoozed',
      icon: 'watch_later',
      href: '/mail/snoozed',
    },
    {
      label: 'Sent',
      icon: 'near_me',
      href: '/mail/sent',
    },
    {
      label: 'Drafts',
      icon: 'insert_drive_file',
      href: '/mail/drafts',
    }
  ]
}

