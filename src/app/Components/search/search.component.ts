import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  @Output() region = new EventEmitter<string>();

  onSearch(event: Event): void {
    const searchCountries = (event.target as HTMLInputElement).value;
    this.search.emit(searchCountries);
  }

  onRegion(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    const selectedRegion = target ? target.value : '';
    this.region.emit(selectedRegion);
  }
}
