import { Injectable } from "@angular/core";
import { Email } from "@/app/models/emails.model";

@Injectable({ providedIn: 'root' })
export class EmailClassifierService {
  private socialDomains = [
    'facebook.com',
    'twitter.com',
    'instagram.com',
    'linkedin.com',
    'tiktok.com',
    'x.com'
  ]

  private socialKeywords = [
    'liked', 'commented', 'shared', 'followed', 'friend request'
  ];

  classify(email: Email) {
    const from = email.from.toLowerCase();
    const text = email.subject + ' ' + email.body.toLowerCase();

    if (this.socialDomains.some(domain => from.includes(domain)) ||
      this.socialKeywords.some(keyword => text.includes(keyword))) {
      return 'Social';
    }

    return 'Primary';
  }
}
