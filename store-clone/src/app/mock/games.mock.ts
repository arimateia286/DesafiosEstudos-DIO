import { Game } from '../model/game';

export const GAMES_MOCK: Game[] = [
  {
    id: 1,
    title: 'Jogue Agora!',
    label: 'Exclusivo',
    price: 59.99,
    type: 'Jogo Digital',
    platforms: ['PS3', 'PS4', 'PS5'],
    cover: 'images/bt-1.jpg',
  },
  {
    id: 2,
    title: 'Jogue Agora!',
    label: 'Edição Limitada',
    price: 59.99,
    type: 'Jogo Completo',
    platforms: ['PS4', 'PS5'],
    cover: 'images/bt-4.jpg',
  },
  {
    id: 3,
    title: 'Compre Agora!',
    price: 59.99,
    type: 'Jogo Digital',
    platforms: ['PS3', 'PS4', 'PS5'],
    cover: 'images/ac-cover.jpg',
  },
  {
    id: 4,
    title: 'Jogue Agora!',
    price: 59.99,
    type: 'Jogo Completo',
    platforms: ['PS4', 'PS5'],
    cover: 'images/bt-5.jpg',
  },
  {
    id: 5,
    title: 'Compre Agora!',
    price: 59.99,
    type: 'Jogo Completo',
    platforms: ['PS4', 'PS5'],
    cover: 'images/bt-bad-company-2.jpg',
  },
  {
    id: 6,
    title: 'Compre Agora!',
    price: 59.99,
    type: 'Jogo Completo',
    platforms: ['PS4', 'PS5', 'PS Vita'],
    cover: 'images/bt-hardline.jpg',
  },
];
