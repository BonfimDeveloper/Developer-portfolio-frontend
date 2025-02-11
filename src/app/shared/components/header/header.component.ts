import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

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

  constructor(
    private router: Router,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;

    // Observa mudanças no modo escuro
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });
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
