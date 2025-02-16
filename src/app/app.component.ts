import { Component } from '@angular/core';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    if (this.darkModeService.isDarkMode) {
      document.body.style.transition =
        'background-color 3s ease-in-out, color 3s ease-in-out';
      document.body.classList.add('dark');
    }
  }
}
