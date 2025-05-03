import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Router } from '@angular/router';

gsap.registerPlugin(TextPlugin); // Registrando o plugin
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('imageToTop', { static: false }) imageToTop!: ElementRef;
  @ViewChild('nameToRight', { static: false }) nameToRight!: ElementRef;
  @ViewChild('backFlip', { static: false }) backFlip!: ElementRef;
  @ViewChild('btnGit', { static: false }) btnGit!: ElementRef;
  @ViewChild('btnLinkedin', { static: false }) btnLinkedin!: ElementRef;
  @ViewChild('btnWhatsApp', { static: false }) btnWhatsApp!: ElementRef;
  @ViewChild('smokeCanvas', { static: false })
  smokeCanvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private animationFrameId!: number;
  private colors = ['#bfdbfe', '#cbd5e1', '#e9d5ff ']; // Azul, Rosa, Roxo
  // Converte HEX para RGBA
  private hexToRGBA(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  isDarkMode?: boolean;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  text: string = 'Desenvolvedor Frontend Angular';
  index: number = 0;
  email: string = 'bonfins360@gmail.com';
  imagemPerfil: string = 'assets/images/dev_1.jpg';
  me: string = 'assets/images/me.jpg';
  me1: string = 'assets/images/me1.png';
  me2: string = 'assets/images/me2.png';

  me1mobile: string = 'assets/images/me1mobile.png';

  angular: string = 'assets/images/angular.png';
  typeScript: string = 'assets/images/type.png';
  javascript: string = 'assets/images/js.png';

  public chave3: string = '{';
  public chave4: string = '}';

  public isHovered: boolean = false;
  rotaAtual: string = 'H O M E';

  constructor(
    private darkModeService: DarkModeService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
    //this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.ctx = this.smokeCanvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.startAnimation();
    const tl = gsap.timeline();

    if (this.backFlip) {
      console.log('Está presente = > ', this.backFlip);
    }

    tl.fromTo(
      this.imageToTop.nativeElement,
      { opacity: 0, y: 900 }, // Estado inicial
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' } // Estado final
    )
      .fromTo(
        this.nameToRight.nativeElement,
        { x: '100%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' } // Move para a posição original
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
    const url = 'assets/pdf/DiegoBonfimCV-2025font12.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }

  @HostListener('window:resize')
  resizeCanvas() {
    this.smokeCanvas.nativeElement.width = window.innerWidth;
    this.smokeCanvas.nativeElement.height = window.innerHeight;
  }

  @HostListener('mousemove', ['$event'])
  createSmoke(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    for (let i = 0; i < 25; i++) {
      this.particles.push({
        x,
        y,
        size: Math.random() * 1 + 1,
        alpha: 1,
        velocityX: (Math.random() - 0.5) * 3,
        velocityY: (Math.random() - 0.5) * 3,
      });
    }
  }

  startAnimation() {
    const animate = () => {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      this.particles.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.alpha -= 0.015; // Faz a fumaça desaparecer

        // this.ctx.beginPath();
        // this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 4);
        // this.ctx.fillStyle = `rgba(200, 200, 200, ${particle.alpha})`; // Cor da fumaça
        // this.ctx.fill();
        // Alterna as cores suavemente
        const colorIndex = Math.floor(
          (index / this.particles.length) * this.colors.length
        );
        this.ctx.fillStyle = this.hexToRGBA(
          this.colors[colorIndex],
          particle.alpha
        );

        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 10);
        this.ctx.fill();

        if (particle.alpha <= 0) {
          this.particles.splice(index, 1); // Remove partículas invisíveis
        }
      });

      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  voltarPagina() {
    this.router.navigate(['/pages/home']);
  }

  avancarPagina() {
    this.router.navigate(['/pages/about']);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }
}
