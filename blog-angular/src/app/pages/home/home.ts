import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCard, SmallCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly newsService = inject(NewsService);

  protected readonly news = this.newsService.getAllNews();
}
