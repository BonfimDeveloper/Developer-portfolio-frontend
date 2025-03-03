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

  constructor(private router: Router) {}

  ngOnInit() {
    // Escutando mudanças na URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const urlAtual = event.urlAfterRedirects;

        if (urlAtual.includes('home')) {
          this.actualRoute = 'Home';
        } else if (urlAtual.includes('about')) {
          this.actualRoute = 'About';
        } else if (urlAtual.includes('projects')) {
          this.actualRoute = 'Projects';
        } else if (urlAtual.includes('services')) {
          this.actualRoute = 'Service';
        } else if (urlAtual.includes('contact')) {
          this.actualRoute = 'Contact';
        } else {
          this.actualRoute = 'Home';
        }

        console.log('URL atual:', urlAtual);
      });
  }
}
