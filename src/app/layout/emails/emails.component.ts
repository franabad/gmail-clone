import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Email } from '../../models/emails.model';
import { EmailService } from '@/app/services/emails.service';
import { CommonModule } from '@angular/common';
import { EmailListComponent } from "../../components/email-list/email-list.component";
import { EmailClassifierService } from '@/app/services/email-classifier.service';
import { CdkDrag, CdkDragDrop, CdkDragEnter, CdkDragExit, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-emails',
  imports: [CommonModule, MatIconModule, EmailListComponent, CdkDropListGroup, CdkDropList],
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

  onEmailDropped(event: CdkDragDrop<any>) {
    const email = event.item.data as Email;
    const tab = event.container.data as Email['tab'];

    const tabElement = event.container.element.nativeElement
    tabElement.removeAttribute('style')

    this.emails = this.emails.map(e =>
      e.id === email.id ? { ...e, tab: tab } : e
    );
  }

  enter(event: CdkDragEnter<any>) {
    const tab = event.container.element.nativeElement
    const email = event.item.element.nativeElement
    const emailContainer = document.getElementById('emails-container')
    emailContainer?.appendChild(email)

    email.className = 'row-wrapper'
    email.removeAttribute('style')
    email.style.backgroundColor = '#c2dbff'

    tab.style.backgroundColor = '#d3e3fd'
    tab.style.border = '1px solid #0b57d0'
    tab.style.borderRadius = '5px'

    const placeholder = event.container.element.nativeElement.lastChild
    placeholder?.remove()
  }

  leave(event: CdkDragExit<any>) {
    const tab = event.container.element.nativeElement
    const email = event.item.element.nativeElement


    tab.removeAttribute('style')
    email.style.display = 'none'
  }
}
