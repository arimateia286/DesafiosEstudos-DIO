import { Component, input } from '@angular/core';
import { Game } from '../../model/game';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  game = input.required<Game>();
}
