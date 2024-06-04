import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isDarkMode?: boolean;
  email: string = 'bonfins360@gmail.com';

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }
}
