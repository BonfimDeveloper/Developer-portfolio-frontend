import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-rota-ativa',
  templateUrl: './rota-ativa.component.html',
  styleUrls: ['./rota-ativa.component.css'],
})
export class RotaAtivaComponent {
  actualRoute: string = '';
  iconClass: string = ''; // Ícone padrão
  constructor(private router: Router) {}

  ngOnInit() {
    // Escutando mudanças na URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const urlAtual = event.urlAfterRedirects;

        if (urlAtual.includes('home')) {
          this.actualRoute = 'Home';
          this.iconClass = 'home';
        } else if (urlAtual.includes('about')) {
          this.actualRoute = 'About';
          this.iconClass = 'badge';
        } else if (urlAtual.includes('projects')) {
          this.actualRoute = 'Projects';
          this.iconClass = 'work';
        } else if (urlAtual.includes('services')) {
          this.actualRoute = 'Service';
          this.iconClass = 'design_services';
        } else if (urlAtual.includes('contact')) {
          this.actualRoute = 'Contact';
          this.iconClass = 'alternate_email';
        } else {
          this.actualRoute = 'Home';
          this.iconClass = 'home';
        }

        console.log('URL atual:', urlAtual);
      });
  }
}
