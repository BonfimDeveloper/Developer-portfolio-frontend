import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-rota-ativa',
  templateUrl: './rota-ativa.component.html',
  styleUrls: ['./rota-ativa.component.css'],
})
export class RotaAtivaComponent {
  @Input() actualRoute: string = '';
  @Input() backPage!: () => void;
  @Input() nextPage!: () => void;

  constructor(private router: Router) {}

  ngOnInit() {}
}
