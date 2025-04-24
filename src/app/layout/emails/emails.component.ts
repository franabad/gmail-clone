import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Email } from '../../models/emails.model';
import { EmailService } from '@/app/services/emails.service';
import { CommonModule } from '@angular/common';
import { EmailListComponent } from "../../components/email-list/email-list.component";
import { EmailClassifierService } from '@/app/services/email-classifier.service';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-emails',
  imports: [CommonModule, MatIconModule, EmailListComponent],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.scss'
})
export class EmailsComponent {
  emails: Email[] = []
  allSelected = false
  selectedTab: Email['tab'] = 'Primary'

  tabs = [
    { label: 'Primary' as const, icon: 'inbox' },
    { label: 'Promotions' as const, icon: 'local_offer' },
    { label: 'Social' as const, icon: 'people' },
    { label: 'Updates' as const, icon: 'info' }
  ]

  constructor(private emailService: EmailService, private classifer: EmailClassifierService) { }

  ngOnInit() {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails.map(email => ({
        ...email,
        tab: this.classifer.classify(email),
        selected: false
      }))
    })
  }

  get emailsByTab(): Email[] {
    return this.emails.filter(email => email.tab === this.selectedTab)
  }

  selectTab(tab: Email['tab']): void {
    this.selectedTab = tab
  }

  get anyEmailSelected(): boolean {
    return this.allSelected || this.emails.some(email => email.selected);
  }

  selectAllEmails(event: Event) {
    const checked = (event.target as HTMLInputElement).checked

    this.emails.forEach(email => email.selected = checked)

    this.allSelected = checked
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, tab: { label: string, icon: string }) {
    event.preventDefault();
    console.log('Drop event', tab);
    const data = event.dataTransfer?.getData('application/json');
    if (data) {
      const item = JSON.parse(data);
      this.emails = this.emails.map(email =>
        email.id === item.id ? { ...email, tab: tab.label as Email['tab'] } : email
      )
    }
  }
}
