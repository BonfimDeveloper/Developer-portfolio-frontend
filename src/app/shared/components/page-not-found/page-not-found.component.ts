import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  public emote: string = '';
  public sad: boolean = true;
  public notFoundIcon: string = '';
  public notFoundTitle: string = '';
  imgPageNotFound: string = 'assets/images/nottfound.png';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.emote = 'sentiment_sad';
    this.notFoundIcon = 'report';
    this.notFoundTitle = '404 - Página não encontrada.';
    setTimeout(() => {
      document.querySelector('.show-slowly')?.classList.add('show'); // Adiciona a classe 'show'
    }, 500);
  }

  public returnToHome(): void {
    this.notFoundIcon = 'info';
    this.notFoundTitle = 'Por favor aguarde, iremos te redirecionar.';
    this.emote = 'sentiment_very_satisfied';
    this.sad = false;
    this.goHome();
  }

  public goHome(): void {
    document.querySelector('.show-slowly')?.classList.add('hide'); // Adiciona a classe 'hide'
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }
}
