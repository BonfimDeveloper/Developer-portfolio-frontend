import { Component, HostBinding } from '@angular/core';

import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @HostBinding('class.dark') get isDarkMode() {
    return this.darkModeService.isDarkMode;
  }

  hide = true;

  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
