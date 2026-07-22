import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Content {
  private readonly route = inject(ActivatedRoute);
  private readonly newsService = inject(NewsService);

  private readonly id = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: Number(this.route.snapshot.paramMap.get('id')) },
  );

  protected readonly news = computed(() => this.newsService.getNewsById(this.id()));
  protected readonly previousNewsId = computed(() => this.newsService.getPreviousNewsId(this.id()));
  protected readonly nextNewsId = computed(() => this.newsService.getNextNewsId(this.id()));
}
