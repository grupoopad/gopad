import { Component } from '@angular/core';
import { NavSectionSelectorService } from '../../services/nav-section-selector.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  constructor(private navService: NavSectionSelectorService) {}
  ListIsVisible = true;
  changeListVisibility() {
    this.ListIsVisible = !this.ListIsVisible;
  }
  listToInvisible() {
    this.ListIsVisible = true;
  }
  toHome() {
    this.navService.toHome();
    this.listToInvisible();
  }
  toMembers() {
    this.navService.toMembers();
    this.listToInvisible();
  }
  toProjects() {
    this.navService.toProjects();
    this.listToInvisible();
  }
  toPublications() {
    this.navService.toPublications();
    this.listToInvisible();
  }
  toNews() {
    this.navService.toNews();
    this.listToInvisible();
  }
}
