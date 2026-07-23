import { Injectable } from '@angular/core';

import { GAMES_MOCK } from '../mock/games.mock';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  games: Game[] = GAMES_MOCK;

  getAll() {
    return this.games;
  }

  getById(id: number) {
    return this.games.find((game) => game.id === id);
  }
}
