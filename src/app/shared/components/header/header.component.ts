import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public chave1: string = '<';
  public chave2: string = '>';
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('AQUI=>', this.router.url);

    this.currentRoute = this.router.url; // Atribui a URL atual à currentRoute
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.currentRoute = route;
    console.log('AQUI=>', this.currentRoute);
  }
}
