import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { LogoComponent } from './components/logo/logo.component';
import { MusicComponent } from './components/music/music.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { Nl2brPipe } from '../pipes/nl2br.pipe';

@NgModule({
  declarations: [
    LogoComponent,
    MusicComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
    Nl2brPipe,
  ],
  imports: [CommonModule, MatDialogModule],
  exports: [
    LogoComponent,
    MusicComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
  ],
})
export class SharedModule {}
