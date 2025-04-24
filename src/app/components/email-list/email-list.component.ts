import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Email } from '../../models/emails.model';
import { EmailComponent } from '../email/email.component';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-email-list',
  imports: [CommonModule, EmailComponent, CdkDropList],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.scss'
})
export class EmailListComponent {
  @Input() emails: Email[] = [];
}
