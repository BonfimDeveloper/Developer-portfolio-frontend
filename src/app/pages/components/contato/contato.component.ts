import { Component } from '@angular/core';
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
export class ContatoComponent {
  contactForm!: FormGroup;
  toastMessage = '';
  maxlength: number = 1000;
  myEmail: string = 'diego.bonfim.dev@gmail.com';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // Inicializando o formulário
    this.contactForm = new FormGroup({
      from_name: new FormControl('', [Validators.required]), // Nome obrigatório
      from_email: new FormControl('', [Validators.required, Validators.email]), // Email obrigatório e deve ser válido
      from_enterprise: new FormControl(''), // Empresa opcional
      message: new FormControl('', [Validators.required]), // Mensagem obrigatória
    });
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
