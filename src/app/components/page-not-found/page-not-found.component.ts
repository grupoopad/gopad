import { Component } from '@angular/core';
import { NavSectionSelectorService } from '../../services/nav-section-selector.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.sass'
})
export class PageNotFoundComponent {

  constructor(readonly navService: NavSectionSelectorService) {}
}
