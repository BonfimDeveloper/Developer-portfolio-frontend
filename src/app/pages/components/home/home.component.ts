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

  @ViewChild('t1', { static: false }) t1!: ElementRef;
  @ViewChild('t2', { static: false }) t2!: ElementRef;
  @ViewChild('t3', { static: false }) t3!: ElementRef;
  @ViewChild('t4', { static: false }) t4!: ElementRef;
  @ViewChild('t5', { static: false }) t5!: ElementRef;
  @ViewChild('t6', { static: false }) t6!: ElementRef;
  @ViewChild('t7', { static: false }) t7!: ElementRef;
  @ViewChild('t8', { static: false }) t8!: ElementRef;
  @ViewChild('t9', { static: false }) t9!: ElementRef;
  @ViewChild('t10', { static: false }) t10!: ElementRef;
  @ViewChild('t11', { static: false }) t11!: ElementRef;
  @ViewChild('t12', { static: false }) t12!: ElementRef;
  @ViewChild('t13', { static: false }) t13!: ElementRef;
  @ViewChild('t14', { static: false }) t14!: ElementRef;
  @ViewChild('t15', { static: false }) t15!: ElementRef;
  @ViewChild('t16', { static: false }) t16!: ElementRef;
  @ViewChild('t17', { static: false }) t17!: ElementRef;
  @ViewChild('t18', { static: false }) t18!: ElementRef;
  @ViewChild('t19', { static: false }) t19!: ElementRef;
  @ViewChild('t20', { static: false }) t20!: ElementRef;
  @ViewChild('t21', { static: false }) t21!: ElementRef;
  @ViewChild('t22', { static: false }) t22!: ElementRef;
  @ViewChild('t23', { static: false }) t23!: ElementRef;
  @ViewChild('t24', { static: false }) t24!: ElementRef;
  @ViewChild('t25', { static: false }) t25!: ElementRef;
  @ViewChild('t26', { static: false }) t26!: ElementRef;
  @ViewChild('t27', { static: false }) t27!: ElementRef;
  @ViewChild('t28', { static: false }) t28!: ElementRef;
  @ViewChild('t29', { static: false }) t29!: ElementRef;
  @ViewChild('t30', { static: false }) t30!: ElementRef;
  @ViewChild('t31', { static: false }) t31!: ElementRef;
  @ViewChild('t32', { static: false }) t32!: ElementRef;
  @ViewChild('t33', { static: false }) t33!: ElementRef;
  @ViewChild('t34', { static: false }) t34!: ElementRef;
  @ViewChild('t35', { static: false }) t35!: ElementRef;
  @ViewChild('t36', { static: false }) t36!: ElementRef;
  @ViewChild('t37', { static: false }) t37!: ElementRef;
  @ViewChild('t38', { static: false }) t38!: ElementRef;
  @ViewChild('t39', { static: false }) t39!: ElementRef;
  @ViewChild('t40', { static: false }) t40!: ElementRef;
  @ViewChild('t41', { static: false }) t41!: ElementRef;
  @ViewChild('t42', { static: false }) t42!: ElementRef;
  @ViewChild('t43', { static: false }) t43!: ElementRef;
  @ViewChild('t44', { static: false }) t44!: ElementRef;
  @ViewChild('t45', { static: false }) t45!: ElementRef;
  @ViewChild('t46', { static: false }) t46!: ElementRef;
  @ViewChild('t47', { static: false }) t47!: ElementRef;
  @ViewChild('t48', { static: false }) t48!: ElementRef;
  @ViewChild('t49', { static: false }) t49!: ElementRef;
  @ViewChild('t50', { static: false }) t50!: ElementRef;
  @ViewChild('t51', { static: false }) t51!: ElementRef;
  @ViewChild('t52', { static: false }) t52!: ElementRef;
  @ViewChild('t53', { static: false }) t53!: ElementRef;
  @ViewChild('t54', { static: false }) t54!: ElementRef;
  @ViewChild('t55', { static: false }) t55!: ElementRef;
  @ViewChild('t56', { static: false }) t56!: ElementRef;
  @ViewChild('t57', { static: false }) t57!: ElementRef;
  @ViewChild('t58', { static: false }) t58!: ElementRef;
  @ViewChild('t59', { static: false }) t59!: ElementRef;
  @ViewChild('t60', { static: false }) t60!: ElementRef;
  @ViewChild('t61', { static: false }) t61!: ElementRef;

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
        { x: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.typeToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.jsToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.typpingText.nativeElement,
        { opacity: 0 }, // Inicialmente invisível
        { opacity: 1, duration: 0.2 } // Torna visível rapidamente
      )
      .to(this.typpingText.nativeElement, {
        text: {
          value:
            'Desenvolvedor Frontend Angular Desenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend AngularDesenvolvedor Frontend Angular', // Texto a ser digitado
          delimiter: '', // Faz com que cada caractere apareça individualmente
        },
        duration: 3,
        ease: 'none',
      })
      .fromTo(
        this.buttonsToTop.nativeElement,
        { opacity: 0, y: 900 }, // Estado inicial
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
      .fromTo(
        this.t1.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t2.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t3.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t4.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t5.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t6.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t7.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t8.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t9.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t10.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t11.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t12.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t13.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t14.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t15.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t16.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t17.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t18.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t19.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t20.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t21.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t22.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t23.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t24.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t25.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )

      .fromTo(
        this.t26.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t27.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t28.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t29.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t30.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t31.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t32.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t33.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t34.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t35.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t36.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t37.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t38.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t39.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t40.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t41.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t42.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t43.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t44.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t45.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t46.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t47.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t48.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t49.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t50.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t51.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t52.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t53.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t54.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t55.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )

      .fromTo(
        this.t56.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t57.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t58.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t59.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t60.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.t61.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.1, ease: 'power2.out' } // Move para a posição original
      )
      .add(() => {
        // Remove o overflow hidden após a animação inicial
        this.renderer.removeStyle(document.body, 'overflow');
      });
  }
}
