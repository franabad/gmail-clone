import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Email } from '../../models/emails.model';
import { MatIconModule } from '@angular/material/icon';
import { CdkDrag, CdkDragPlaceholder, CdkDragPreview } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-email',
  imports: [CommonModule, MatIconModule, CdkDrag, CdkDragPlaceholder, CdkDragPreview],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  @Input() email!: Email

  isDragging = false;

  @HostBinding('class.dragging') get draggingClass() {
    return this.isDragging;
  }

  onDragStarted() {
    this.isDragging = true;
    console.log('Drag started', this.email);
  }

  onDragEnded() {
    this.isDragging = false;
    console.log('Drag ended', this.email);
  }
}
