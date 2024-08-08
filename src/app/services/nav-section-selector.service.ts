import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export enum Sections {
  Home = 1,
  Members,
  Projects,
  Publications,
}

@Injectable({
  providedIn: 'root'
})
export class NavSectionSelectorService {
  // private sectionSource = new Subject<Sections>()
  // sectionStream = this.sectionSource.asObservable()
  constructor(private router: Router) {}
  toHome() {
    // this.sectionSource.next(Sections.Home)
    this.router.navigate(['/home'])
  }
  toProjects() {
    // this.sectionSource.next(Sections.Projects)
    this.router.navigate(['/projects'])
  }
  toPublications() {
    // this.sectionSource.next(Sections.Publications)
    this.router.navigate(['/publications'])
  }
  toMembers() {
    // this.sectionSource.next(Sections.Members)
    this.router.navigate(['/members'])
  }
  toNews() {
    // this.sectionSource.next(Sections.Members)
    this.router.navigate(['/news'])
  }
}
