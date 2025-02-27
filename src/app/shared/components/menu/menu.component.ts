import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('divToRight', { static: false }) divToRight!: ElementRef;
  @ViewChild('icon1ToRight', { static: false }) icon1ToRight!: ElementRef;
  @ViewChild('icon2ToRight', { static: false }) icon2ToRight!: ElementRef;
  @ViewChild('icon3ToRight', { static: false }) icon3ToRight!: ElementRef;
  @ViewChildren('labels') labels!: QueryList<ElementRef>;
  @ViewChildren('descriptions') descriptions!: QueryList<ElementRef>;

  isDarkMode: boolean = false;
  isOpen: boolean = false;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;

  currentRoute: string = '';
  menuLinks = [
    {
      label: 'Home',
      description: 'Back to the home page.',
      routes: ['/pages/home', '/'],
    },
    {
      label: 'About',
      description: 'A little about me and my background.',
      routes: ['/pages/about'],
    },
    {
      label: 'Projects',
      description: 'My approach to development.',
      routes: ['/pages/projects'],
    },
    {
      label: 'Service',
      description: 'nownocndokncvodvnodk',
      routes: ['/pages/services'],
    },
    {
      label: 'Contact',
      description: 'Talk to me.',
      routes: ['/pages/contact'],
    },
  ];
  constructor(
    private router: Router,
    private darkModeService: DarkModeService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });
    // Define o active corretamente ao carregar a página
    this.currentRoute = this.router.url;
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const tl = gsap.timeline();

    tl.to({}, { duration: 0.5 }) // Aguarda meio segundo antes de iniciar as animações
      .fromTo(
        this.divToRight.nativeElement,
        { x: '500%', opacity: 1, width: '500px' }, // Começa fora da tela à direita
        {
          x: '0%',
          opacity: 1,
          width: '112px',
          duration: 0.5,
          ease: 'power2.out',
        } // Move para a posição original
      )
      .fromTo(
        this.icon1ToRight.nativeElement,
        { x: '500%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.icon2ToRight.nativeElement,
        { x: '500%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' } // Move para a posição original
      )
      .fromTo(
        this.icon3ToRight.nativeElement,
        { x: '500%', opacity: 0 }, // Começa fora da tela à direita
        { x: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' } // Move para a posição original
      );

    this.labels.forEach((label, index) => {
      tl.fromTo(
        label.nativeElement,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
          //delay: index * 0.1,
        } // Pequeno delay para efeito cascata
      );
    });

    this.descriptions.forEach((desc, index) => {
      tl.fromTo(
        desc.nativeElement,
        { x: '100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
          //delay: index * 0.1,
        } // Pequeno delay para efeito cascata
      );
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.currentRoute = route;
    this.isOpen = false;
  }

  isActive(routes: string[]): boolean {
    return routes.includes(this.currentRoute);
  }

  public openWhatsApp(): void {
    window.open('https://wa.me/71997361553', '_blank');
  }

  public downloadCV(): void {
    const url = 'assets/pdf/diegoCV.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
}
