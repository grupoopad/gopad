import { Component, Input } from '@angular/core';
import { PublicationCardComponent } from '../publication-card/publication-card.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PublicationCardComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.sass'
})
export class PublicationsComponent {

}
