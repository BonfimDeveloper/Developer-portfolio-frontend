import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const content = `This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.
This is the content to be displayed in the modal.`;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Custom Title',
        content: content,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.event === 'cancel') {
        this.onCancel();
      } else if (result?.event === 'confirm') {
        this.onConfirm();
      }
    });
  }

  onCancel(): void {
    console.log('Modal cancelled');
  }

  onConfirm(): void {
    console.log('Modal confirmed');
  }
}
