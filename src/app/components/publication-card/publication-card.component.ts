import { Component, Input } from '@angular/core';
import { Publication } from '../../entities/publication';
@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.sass'
})
export class PublicationCardComponent {
  @Input() publication !: Publication

}
