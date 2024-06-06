import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent {
  @Input() title: string = 'Default Title';
  dataContent: any;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataContent = data.content;
  }

  onCancel(): void {
    this.dialogRef.close({ event: 'cancel' });
  }

  onConfirm(): void {
    this.dialogRef.close({ event: 'confirm' });
  }
}
