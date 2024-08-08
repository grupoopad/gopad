import { Injectable } from '@angular/core';
import { ItemsPerPage } from '../entities/items-per-page';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../entities/publication';



@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  newsPerPage = ItemsPerPage.One;
  page = 1;
  paths: string[] = [
    "assets/publications/[YYYY-MM-DD][template].json",
    "assets/publications/[YYYY-MM-DD][template1].json",
    "assets/publications/[YYYY-MM-DD][template2].json",
    // adicione mais caminhos conforme necessário
  ];

  currentPublication!:Publication

  pagesNumber = Math.ceil(this.paths.length / this.newsPerPage);

  publicationSubject = new Subject<Publication[]>();

  news$ = this.publicationSubject.asObservable();

  constructor(private http: HttpClient) { }

  getNews(path: string): Observable<any> {
    return this.http.get<Publication>(path);
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


    const publicationList: Publication[] = [];
    console.log(pathsToLoad)
    pathsToLoad.forEach(path => {
      this.getNews(path).subscribe(news => {
        publicationList.push(news);
        if (publicationList.length === pathsToLoad.length) {
          this.publicationSubject.next(publicationList);
        }
      });
    });
  }
}
