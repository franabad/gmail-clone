import { Routes } from '@angular/router';
import { EmailsComponent } from './layout/emails/emails.component';

export const routes: Routes = [
  {
    path: 'mail/:filter',
    component: EmailsComponent
  },
  {
    path: '',
    redirectTo: 'mail/inbox',
    pathMatch: 'full',
  }
];
