import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  Renderer2,
} from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin); // Registrando o plugin
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('imageToTop', { static: false }) imageToTop!: ElementRef;
  @ViewChild('nameToLeft', { static: false }) nameToLeft!: ElementRef;
  @ViewChild('nameToRight', { static: false }) nameToRight!: ElementRef;
  @ViewChild('angularToRight', { static: false }) angularToRight!: ElementRef;
  @ViewChild('typeToRight', { static: false }) typeToRight!: ElementRef;
  @ViewChild('jsToRight', { static: false }) jsToRight!: ElementRef;
  @ViewChild('typpingText', { static: false }) typpingText!: ElementRef;
  @ViewChild('buttonsToTop', { static: false }) buttonsToTop!: ElementRef;
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
  me: string = 'assets/images/me.jpg';
  angular: string = 'assets/images/angular.png';
  typeScript: string = 'assets/images/type.png';
  javascript: string = 'assets/images/js.png';

  public chave3: string = '{';
  public chave4: string = '}';

  constructor(
    private darkModeService: DarkModeService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
    //this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    const tl = gsap.timeline();

    tl.fromTo(
      this.imageToTop.nativeElement,
      { opacity: 0, y: 900 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' } // Estado final
    )
      .fromTo(
        this.nameToLeft.nativeElement,
        { x: '-100%', opacity: 0 }, // Estado inicial igual ao CSS
        { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' } // Estado final
      )
      .fromTo(
        this.nameToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.angularToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.3, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.typeToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.3, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.jsToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.3, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.typpingText.nativeElement,
        { opacity: 0 }, // Inicialmente invisível
        { opacity: 1, duration: 0.2 } // Torna visível rapidamente
      )
      .to(this.typpingText.nativeElement, {
        text: {
          value:
            'Olá! Sou Diego Bonfim, desenvolvedor frontend com foco em transformar ideias em interfaces intuitivas e responsivas. Sou fã do framework Angular, mas também utilizo React, preferindo TypeScript para a lógica. Gosto muito de trabalhar com Tailwind e GSAP, que permitem criar efeitos e animações incríveis!', // Texto a ser digitado
          delimiter: '', // Faz com que cada caractere apareça individualmente
        },
        duration: 1,
        ease: 'none',
      })
      .fromTo(
        this.buttonsToTop.nativeElement,
        { opacity: 0, y: 100 }, // Estado inicial
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' } // Estado final
      )
      .to(this.btnGit.nativeElement, {
        rotation: '+=360', // Gira 360°
        duration: 0.5, // Tempo de rotação
        ease: 'linear',
        repeat: -1, // Loop infinito
        repeatDelay: 10, // Pausa de 10 segundos entre cada rotação
      })
      .to(this.btnLinkedin.nativeElement, {
        rotation: '+=360', // Gira 360°
        duration: 0.5, // Tempo de rotação
        ease: 'linear',
        repeat: -1, // Loop infinito
        repeatDelay: 10, // Pausa de 10 segundos entre cada rotação
      })
      .to(this.btnWhatsApp.nativeElement, {
        rotation: '+=360', // Gira 360°
        duration: 0.5, // Tempo de rotação
        ease: 'linear',
        repeat: -1, // Loop infinito
        repeatDelay: 10, // Pausa de 10 segundos entre cada rotação
      })

      .add(() => {
        // Remove o overflow hidden após a animação inicial
        this.renderer.removeStyle(document.body, 'overflow');
      });
  }

  public openWhatsApp(): void {
    window.open('https://wa.me/71997361553', '_blank');
  }

  public downloadCV(): void {
    const url = 'assets/pdf/diegoCV.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
}
