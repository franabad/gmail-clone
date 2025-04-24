import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Email } from '../../models/emails.model';
import { MatIconModule } from '@angular/material/icon';
import { CdkDrag, CdkDragPlaceholder, CdkDragPreview } from '@angular/cdk/drag-drop';
import { info } from 'node:console';

@Component({
  selector: 'app-email',
  imports: [CommonModule, MatIconModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  @Input() email!: Email

  onDragStart(event: DragEvent, email: Email) {
    if (!event.dataTransfer) return;

    console.log('Drag started', email);

    // 3) Crear preview
    const dragIcon = document.createElement('div');
    dragIcon.setAttribute('style', 'cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/closedhand.cur) 7 5, move; position: absolute; left: 709px; top: 191px; z-index: 17;');

    const infoDrag = document.createElement('div');
    infoDrag.setAttribute('style', 'background-color: #1a73e8; boder: none; display: flex; border-radius: 4px; padding: 0; box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2); font-size: 14px; color: #333; width: 280px; height: 56px; align-items: center; color: #fff;');

    infoDrag.innerText = 'Move 1 conversation'

    event.dataTransfer.effectAllowed = "move";


    event.dataTransfer.setData('application/json', JSON.stringify(email));
    // Posicionamos el “hot spot” del cursor en la esquina superior izquierda
    event.dataTransfer.setDragImage(dragIcon, 0, 0);

    // // Limpiamos el elemento tras iniciarse el paint del drag image
    // setTimeout(() => document.body.removeChild(dragIcon), 0);
  }
}
