import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NewsService } from '../../services/news.service';
import { News } from '../../entities/news';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass',
  providers:[
    HttpClient,
  ],
})
export class NewsComponent implements OnInit{
  page = 1
  lastPage = this.newsService.pagesNumber // Value of the last page with content
  pages:number[] = []
  news: News[] = []

  constructor(readonly newsService:NewsService,) {}

  ngOnInit(): void {
    this.newsService.news$.subscribe((s) => this.news.push(...s))

    this.pages = Array(this.lastPage) // build the array with the number of pages
      .fill(null)
      .map((_,i) => i+1)

    this.newsService.loadPage(this.page)
  }

  loadPage(n:number) {
    this.news = []
    // this.newsService.news$.subscribe((s) => this.news.push(...s))
    this.newsService.loadPage(n)
  }
}
