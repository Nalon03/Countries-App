import { Component } from '@angular/core';
import { LayoutComponent } from '../../Re-usable component/layout/layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsComponent {
  constructor(private route: Router) {}
  goBack() {
    this.route.navigate(['/home']);
  }
}
