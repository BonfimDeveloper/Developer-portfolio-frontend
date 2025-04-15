import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent {
  rotaAtual: string = 'SOBRE';
  me1mobile: string = 'assets/images/me1mobile.png';
  serpro: string = 'assets/images/serpro.png';
}
