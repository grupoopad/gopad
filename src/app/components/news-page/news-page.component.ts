import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { News } from '../../entities/news';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.sass'
})
export class NewsPageComponent implements OnInit  {
  @Input() news!:News

  constructor(readonly newsService:NewsService) {}

  ngOnInit(): void {
    this.news = this.newsService.currentNews  
      
    if (this.news == null) {
        this.newsService.getNews(this.newsService.paths[0]).subscribe((news:News) => {
        news.publicationDate = new Date(news.publicationDate)
        this.news = news});
    }
  }


}
