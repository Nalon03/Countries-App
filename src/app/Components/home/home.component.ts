import { Component, OnInit } from '@angular/core';
import { Country } from '../../Interface/country-interface';
import { CountryService } from '../../Service/country.service';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../Re-usable component/layout/layout.component';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LayoutComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];

  constructor(private service: CountryService) {}
  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.service.getCountries().subscribe((data: Country[]) => {
      this.countries = data;
      this.filteredCountries = [...data];
    });
  }

  searchCountries(searchItem: string) {
    this.filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
    );
  }

  filterRegions(region: string) {
    this.filteredCountries = this.countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
  }
}
