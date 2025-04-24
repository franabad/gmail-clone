export type Email = {
  id: number;
  from: string;
  subject: string;
  body: string;
  date: string;
  isFavorite: boolean;
  isRead: boolean;
  tag: string;
  selected?: boolean;
  tab?: 'Primary' | 'Promotions' | 'Social' | 'Updates';
}
