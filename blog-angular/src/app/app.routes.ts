import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Content } from './pages/content/content';
import { AllNews } from './pages/all-news/all-news';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'news/:id', component: Content },
  { path: 'all-news', component: AllNews },
];
