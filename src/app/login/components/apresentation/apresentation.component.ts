import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css'],
})
export class ApresentationComponent implements OnInit {
  imgFrontEnd: string = 'assets/images/frontt.webp';
  @HostBinding('class.dark') get isDarkMode() {
    return this.darkModeService.isDarkMode;
  }

  constructor(
    public dialog: MatDialog,
    private darkModeService: DarkModeService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      document.querySelector('.show-slowly')?.classList.add('show'); // Adiciona a classe 'show'
      document.querySelector('.dk')?.classList.add('show');
      document.querySelector('.wt')?.classList.add('show'); // Adiciona a classe 'show'
      // Adiciona a classe 'show'
    }, 500);
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

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
