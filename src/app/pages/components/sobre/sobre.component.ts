import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { gsap } from 'gsap';
import { FormBuilder, Validators } from '@angular/forms';

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

  public isHovered: boolean = false;
  idea1: string = 'assets/images/idea.png';
  idea2: string = 'assets/images/idea2.png';

  public listaCursoJava: string[] = [
    'Lógica de programação e algoritmos',
    'Sintaxe da linguagem Java',
    'Classes, atributos e métodos',
    'Construtores, sobrecarga, encapsulamento',
    'Estruturas de dados: arrays e coleções',
    'Enumerações, composição',
    'Herança, polimorfismo, interfaces',
    'Tratamento de exceções',
    'Generics',
    'Programação funcional e expressões lambda',
    'Stream API',
    'Manipulação de arquivos',
    'JDBC para acesso a dados baseado em SQL',
    'JavaFX para interface gráfica',
    'Git / Github para versionamento',
    'Spring Boot - principal framework Java para desenvolvimento comercial em Java',
    'JPA / Hibernate para acesso a dados com mapeamento objeto-relacional (ORM)',
    'Maven para gerenciamento de dependências de projeto',
    'Spring Data JPA - framework para acesso a dados ORM',
    'Spring Data MongoDB - framework para acesso a dados NoSQL ao banco MongoDB',
  ];

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  cert: string = 'assets/images/cert.png';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

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

  public downloadRelatorio1(): void {
    const url = 'assets/pdf/relatorio-estagio-periodo-1.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
  public downloadRelatorio2(): void {
    const url = 'assets/pdf/relatorio-estagio-periodo-2.pdf'; // Caminho dentro da pasta assets
    window.open(url, '_blank'); // Abre o PDF em uma nova aba
  }
}
