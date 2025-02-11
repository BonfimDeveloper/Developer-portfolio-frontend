// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class DarkModeService {
//   private darkModeSubject = new BehaviorSubject<boolean>(false);
//   darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

//   get isDarkMode(): boolean {
//     return this.darkModeSubject.value;
//   }

//   toggleDarkMode(): void {
//     const newMode = !this.isDarkMode;
//     this.darkModeSubject.next(newMode);
//     localStorage.setItem('darkMode', JSON.stringify(newMode));
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(
    JSON.parse(localStorage.getItem('darkMode') || 'false')
  );

  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  get isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  constructor() {
    this.applyDarkMode(this.isDarkMode);
  }

  toggleDarkMode(): void {
    const newMode = !this.isDarkMode;
    this.darkModeSubject.next(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    this.applyDarkMode(newMode);
  }

  private applyDarkMode(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
