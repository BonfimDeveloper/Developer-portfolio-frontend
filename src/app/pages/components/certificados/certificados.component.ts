import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css'],
})
export class CertificadosComponent {
  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef<HTMLDivElement>;
  certificadoJava: string = 'assets/images/certificadoJava.png';
  certificadoRedux: string = 'assets/images/certificadoRedux.png';
  certificadoTestesAngular: string =
    'assets/images/certificadoTestesAngular.png';

  certificadoJavaScript: string = 'assets/images/certificadoJavaScript.png';
  constructor(private dialog: MatDialog) {}

  openImageModal(imagemUrl: string): void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Certificado de conclusão',
        content: imagemUrl,
      },
    });
  }
}
