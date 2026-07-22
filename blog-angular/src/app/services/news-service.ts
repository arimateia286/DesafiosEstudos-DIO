import { Injectable } from '@angular/core';

import { News } from '../model/news';
import { NEWS_MOCK } from '../mock/mock';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news: News[] = NEWS_MOCK;

  getAllNews() {
    return this.news.sort((a, b) => b.date.localeCompare(a.date));
  }

  getNewsById(id: number) {
    return this.news.find((news) => news.id === id);
  }

  getPreviousNewsId(id: number): number | undefined {
    const index = this.news.findIndex((news) => news.id === id);
    if (index <= 0) {
      return undefined;
    }
    return this.news[index - 1].id;
  }

  getNextNewsId(id: number): number | undefined {
    const index = this.news.findIndex((news) => news.id === id);
    if (index === -1 || index === this.news.length - 1) {
      return undefined;
    }
    return this.news[index + 1].id;
  }
}
