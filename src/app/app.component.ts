import {
  Component,
  EventEmitter,
  HostBinding,
  Output,
  effect,
  signal,
} from '@angular/core';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // darkMode = signal<boolean>(
  //   JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  // );

  // @HostBinding('class.dark') get mode() {
  //   return this.darkMode();
  // }

  // @Output() darkModeChange = new EventEmitter<boolean>();

  // constructor() {
  //   effect(() => {
  //     window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  //   });
  // }
  // @HostBinding('class.dark') get isDarkMode() {
  //   return this.darkModeService.isDarkMode;
  // }

  // constructor(private darkModeService: DarkModeService) {}

  // toggleDarkMode() {
  //   this.darkModeService.toggleDarkMode();
  // }

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    if (this.darkModeService.isDarkMode) {
      document.body.classList.add('dark');
    }
  }
}
