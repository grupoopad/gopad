import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../entities/news';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.sass'
})
export class NewsCardComponent {
  @Input() news!:News

  constructor(readonly newsService:NewsService,private router:Router){}

  setNews(n:News){
    this.news = n
  }

  goToNews(news:News) {
    this.router.navigate(['news-page'])
    this.newsService.currentNews = news
  }
}
