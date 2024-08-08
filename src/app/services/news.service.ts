import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { News } from '../entities/news';
import { ItemsPerPage } from '../entities/items-per-page';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsPerPage = ItemsPerPage.Ten;
  page = 1;
  paths: string[] = [
    "assets/news/[YYYY-MM-DD][template].json",
    "assets/news/[YYYY-MM-DD][template1].json",
    // "assets/news/[YYYY-MM-DD][template2].json",
    // adicione mais caminhos conforme necessário
  ];

  currentNews!:News 

  pagesNumber = Math.ceil(this.paths.length / this.newsPerPage);

  newsSubject = new Subject<News[]>();

  news$ = this.newsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getNews(path: string): Observable<any> {
    return this.http.get<News>(path);
  }

  changeNewsPerPage(n: ItemsPerPage) {
    this.newsPerPage = n;
    this.pagesNumber = Math.ceil(this.paths.length / this.newsPerPage);
    this.loadPage(1); 52
  }

  loadPage(page: number) {
    this.page = page;

    const startIndex = (this.page - 1) * this.newsPerPage;
    const endIndex = startIndex + this.newsPerPage;
    const pathsToLoad = this.paths.slice(startIndex, endIndex);


    const newsList: News[] = [];
    console.log(pathsToLoad)
    pathsToLoad.forEach(path => {
      this.getNews(path).subscribe((news:News) => {
        news.publicationDate = new Date(news.publicationDate)
        newsList.push(news);
        if (newsList.length === pathsToLoad.length) {
          this.newsSubject.next(newsList);
        }
      });
    });
  }
  getDateOfPublication(news:News): String {
    let day = news.publicationDate.getDate() + 1
    let month = news.publicationDate.getMonth() + 1
    let year = news.publicationDate.getFullYear()

    // Formate o dia e o mês com zero à esquerda, se necessário
    const formattedDay = day.toString().padStart(2, '0')
    const formattedMonth = month.toString().padStart(2, '0')

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`
    return formattedDate
  }
}
