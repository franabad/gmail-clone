// email.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '@/app/models/emails.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http = inject(HttpClient);

  getEmails(): Observable<Email[]> {
    return this.http.get<Email[]>('/assets/emails.json');
  }
}
