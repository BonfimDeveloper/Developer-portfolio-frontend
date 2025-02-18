import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public chave1: string = '<';
  public chave2: string = '>';

  currentRoute: string = '';
  isDarkMode: boolean = false;

  menuLinks = [
    { label: 'Início', routes: ['/pages/home', '/'] },
    { label: 'Sobre', routes: ['/pages/about'] },
    { label: 'Projetos', routes: ['/pages/projects'] },
    { label: 'Serviços', routes: ['/pages/services'] },
    { label: 'Contato', routes: ['/pages/contact'] },
  ];
  private scrollListener!: () => void;
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

    const contentWrapper = document.getElementById('content-wrapper');
    if (!contentWrapper) return;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.currentRoute = route;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isActive(routes: string[]): boolean {
    return routes.includes(this.currentRoute);
  }
}
