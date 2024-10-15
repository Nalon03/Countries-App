import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeComponent } from '../../Components/home/home.component';
import { SearchComponent } from '../../Components/search/search.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() theme: string = 'Light Mode';
  @Input() title: string = 'Where in the world';

  @Output() toogleTheme = new EventEmitter<void>();
}
