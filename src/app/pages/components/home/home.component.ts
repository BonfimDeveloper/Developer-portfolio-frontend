import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('elementoAnimado', { static: false }) elementoAnimado!: ElementRef;
  @ViewChild('btnGit', { static: false }) btnGit!: ElementRef;
  @ViewChild('btnLinkedin', { static: false }) btnLinkedin!: ElementRef;
  @ViewChild('btnWhatsApp', { static: false }) btnWhatsApp!: ElementRef;

  isDarkMode?: boolean;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  text: string = 'Desenvolvedor Frontend Angular';
  index: number = 0;
  email: string = 'bonfins360@gmail.com';
  imagemPerfil: string = 'assets/images/dev_1.jpg';
  public chave3: string = '{';
  public chave4: string = '}';

  constructor(
    private darkModeService: DarkModeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();

    const tl = gsap.timeline();

    tl.fromTo(
      this.elementoAnimado.nativeElement,
      { opacity: 0, y: 900 }, // Estado inicial
      { opacity: 1, y: 0, duration: 2, ease: 'power2.out' } // Estado final
    )
      .to(this.btnGit.nativeElement, {
        rotation: '+=360', // Gira 360°
        duration: 1, // Tempo de rotação
        ease: 'linear',
        repeat: -1, // Loop infinito
        repeatDelay: 10, // Pausa de 10 segundos entre cada rotação
      })
      .to(this.btnLinkedin.nativeElement, {
        rotation: '+=360', // Gira 360°
        duration: 1, // Tempo de rotação
        ease: 'linear',
        repeat: -1, // Loop infinito
        repeatDelay: 10, // Pausa de 10 segundos entre cada rotação
      })
      .to(this.btnWhatsApp.nativeElement, {
        rotation: '+=360', // Gira 360°
        duration: 1, // Tempo de rotação
        ease: 'linear',
        repeat: -1, // Loop infinito
        repeatDelay: 10, // Pausa de 10 segundos entre cada rotação
      });
  }
}
