import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isDarkMode: boolean = false;
  isOpen: boolean = false;

  currentRoute: string = '';
  menuLinks = [
    {
      label: 'Home',
      description: 'Back to the home page.',
      routes: ['/pages/home', '/'],
    },
    {
      label: 'About',
      description: 'A little about me and my background.',
      routes: ['/pages/about'],
    },
    {
      label: 'Projects',
      description: 'My approach to development.',
      routes: ['/pages/projects'],
    },
    {
      label: 'Service',
      description: 'nownocndokncvodvnodk',
      routes: ['/pages/services'],
    },
    {
      label: 'Contact',
      description: 'Talk to me.',
      routes: ['/pages/contact'],
    },
  ];
  constructor(
    private router: Router,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });

    // Define o active corretamente ao carregar a página
    this.currentRoute = this.router.url;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.currentRoute = route;
    this.isOpen = false;
  }

  isActive(routes: string[]): boolean {
    return routes.includes(this.currentRoute);
  }
}
