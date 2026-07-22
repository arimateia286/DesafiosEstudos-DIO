import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { News } from '../../model/news';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCard {
  news = input.required<News>();
}
