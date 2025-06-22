import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import emailjs from '@emailjs/browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormModel } from 'src/model/contact-form.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  toastMessage = '';
  maxlength: number = 1000;
  myEmail: string = 'diego.bonfim.dev@gmail.com';

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
  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Inicializando o formulário
    this.contactForm = new FormGroup({
      from_name: new FormControl('', [Validators.required]), // Nome obrigatório
      from_email: new FormControl('', [Validators.required, Validators.email]), // Email obrigatório e deve ser válido
      from_enterprise: new FormControl(''), // Empresa opcional
      message: new FormControl('', [Validators.required]), // Mensagem obrigatória
    });
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.ctx = this.smokeCanvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.startAnimation();
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

  sendEmail(event: Event) {
    if (this.contactForm.valid) {
      event.preventDefault(); // Evita recarregar a página

      const serviceID = 'service_vz5qwp6';
      const templateID = 'template_k6pglsq';
      const userID = 'm1jHgsXZMEbr8_qlw';

      let contactData: Record<string, unknown> = {
        from_name: this.contactForm.get('from_name')?.value,
        from_email: this.contactForm.get('from_email')?.value,
        from_enterprise: this.contactForm.get('from_enterprise')?.value,
        message: this.contactForm.get('message')?.value,
      };

      emailjs
        .send(serviceID, templateID, contactData, userID)
        .then(() => {
          this.toastMessage = 'E-mail enviado com sucesso!';
          this.contactForm.reset(); // Limpa o formulário
        })
        .catch((error) => {
          this.toastMessage = 'Erro ao enviar o e-mail. Tente novamente.';
          console.error('Erro:', error);
        });
    } else {
      console.log('Formulário inválido');
    }
  }

  copyEmail() {
    navigator.clipboard
      .writeText(this.myEmail)
      .then(() => {
        console.log('E-mail copiado para a área de transferência!'); // Mensagem de feedback
      })
      .catch((err) => {
        console.error('Erro ao copiar e-mail:', err);
      });
  }
}
