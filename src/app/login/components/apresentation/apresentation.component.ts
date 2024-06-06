import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css'],
})
export class ApresentationComponent {
  imgFrontEnd: string = 'assets/images/frontt.webp';

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
