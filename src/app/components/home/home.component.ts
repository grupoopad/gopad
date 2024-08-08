import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  views:Record<string,boolean> = {
    'Home':         true,
    'Publications': false,
    'Projects':     false,
    'Team':         false
  }

}
