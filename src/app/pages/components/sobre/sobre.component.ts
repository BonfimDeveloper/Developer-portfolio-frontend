import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef<HTMLDivElement>;

  rotaAtual: string = 'S O B R E';
  me1mobile: string = 'assets/images/meWithoutBg.png';
  serpro: string = 'assets/images/serpro.png';
  certificadoJava: string = 'assets/images/certificadoJava.png';
  certificadoRedux: string = 'assets/images/certificadoRedux.png';
  certificadoTestesAngular: string =
    'assets/images/certificadoTestesAngular.png';

  certificadoJavaScript: string = 'assets/images/certificadoJavaScript.png';

  constructor(private router: Router, private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    const container = this.scrollContainerRef.nativeElement;

    container.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();

        if (event.deltaY > 0) {
          this.scrollToNextSection();
        } else {
          this.scrollToPreviousSection();
        }
      },
      { passive: false }
    );
  }

  scrollToNextSection() {
    const scrollContainer = this.scrollContainerRef.nativeElement;

    gsap.to(scrollContainer, {
      scrollLeft: scrollContainer.scrollLeft + window.innerWidth,
      duration: 1.4, // mais tempo = mais smooth
      ease: 'power4.out', // transição mais suave ainda
      overwrite: 'auto', // cancela a animação anterior se começar outra
    });
  }

  scrollToPreviousSection() {
    const scrollContainer = this.scrollContainerRef.nativeElement;

    gsap.to(scrollContainer, {
      scrollLeft: scrollContainer.scrollLeft - window.innerWidth,
      duration: 1.4,
      ease: 'power4.out',
      overwrite: 'auto',
    });
  }

  voltarPagina() {
    this.router.navigate(['/pages/home']);
  }

  avancarPagina() {
    this.router.navigate(['/pages/projects']);
  }

  openImageModal(imagemUrl: string): void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Certificado de conclusão',
        content: imagemUrl,
      },
    });
  }
}
