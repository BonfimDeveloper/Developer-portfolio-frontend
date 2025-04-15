import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent {
  rotaAtual: string = 'S O B R E';
  me1mobile: string = 'assets/images/me1mobile.png';
  serpro: string = 'assets/images/serpro.png';

  constructor(private router: Router) {}

  voltarPagina() {
    this.router.navigate(['/pages/home']);
  }

  avancarPagina() {
    this.router.navigate(['/pages/projects']);
  }
}
