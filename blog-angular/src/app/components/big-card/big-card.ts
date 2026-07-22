import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { News } from '../../model/news';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigCard {
  news = input.required<News>();
}
