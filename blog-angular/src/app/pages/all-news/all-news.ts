import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SmallCard } from '../../components/small-card/small-card';
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [SmallCard],
  templateUrl: './all-news.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllNews {
  private readonly newsService = inject(NewsService);

  protected readonly news = this.newsService.getAllNews();
}
