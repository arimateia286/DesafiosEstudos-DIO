import { Component, inject } from '@angular/core';

import { Card } from '../../components/card/card';
import { GamesService } from '../../services/games-service';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly gamesService = inject(GamesService);

  protected readonly games = this.gamesService.getAll();
}
