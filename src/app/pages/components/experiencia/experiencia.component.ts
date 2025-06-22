import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  serpro: string = 'assets/images/serpro.png';
  constructor() {}

  public downloadRelatorio1(): void {
    const url = 'assets/pdf/relatorio-estagio-periodo-1.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
  public downloadRelatorio2(): void {
    const url = 'assets/pdf/relatorio-estagio-periodo-2.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
}
