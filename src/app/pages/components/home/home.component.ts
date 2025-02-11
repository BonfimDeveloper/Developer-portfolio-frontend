import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  HostBinding,
} from '@angular/core';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideUpp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(900px)' }),
        animate(
          '2s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isDarkMode?: boolean;
  email: string = 'bonfins360@gmail.com';
  imagemPerfil: string = 'assets/images/dev_1.jpg';

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;

  text: string = 'Desenvolvedor Frontend Angular';
  index: number = 0;

  @ViewChild('typingEffect', { static: false }) textElement?: ElementRef;

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
    this.cdr.detectChanges(); // Força a atualização do Angular antes de acessar a ViewChild
    setTimeout(() => this.typeText(), 500);
  }

  typeText(): void {
    if (!this.textElement) return;

    if (this.index < this.text.length) {
      this.textElement.nativeElement.innerHTML += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 100);
    }
  }
}
