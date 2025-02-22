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
    { label: 'Início', routes: ['/pages/home', '/'] },
    { label: 'Sobre', routes: ['/pages/about'] },
    { label: 'Projetos', routes: ['/pages/projects'] },
    { label: 'Serviços', routes: ['/pages/services'] },
    { label: 'Contato', routes: ['/pages/contact'] },
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
