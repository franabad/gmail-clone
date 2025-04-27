import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { Email } from '../../models/emails.model';
import { MatIconModule } from '@angular/material/icon';
import { CdkDrag, CdkDragEnd, CdkDragPreview, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-email',
  imports: [CommonModule, MatIconModule, CdkDrag, CdkDragPreview],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  @Input() email!: Email

  dragStarted(event: CdkDragStart) {
    document.body.classList.add('dragging')
  }

  dragEnded(event: CdkDragEnd) {
    const email = event.source.element.nativeElement

    email.removeAttribute('style')
    document.body.classList.remove('dragging')
  }
}
