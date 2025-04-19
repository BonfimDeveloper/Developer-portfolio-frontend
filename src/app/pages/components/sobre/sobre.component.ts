import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent {
  rotaAtual: string = 'S O B R E';
  me1mobile: string = 'assets/images/me1mobile.png';
  serpro: string = 'assets/images/serpro.png';
  certificadoJava: string = 'assets/images/certificadoJava.png';
  certificadoRedux: string = 'assets/images/certificadoRedux.png';
  certificadoTestesAngular: string =
    'assets/images/certificadoTestesAngular.png';

  certificadoJavaScript: string = 'assets/images/certificadoJavaScript.png';

  constructor(private router: Router, private dialog: MatDialog) {}

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
