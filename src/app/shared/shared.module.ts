import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { LogoComponent } from './components/logo/logo.component';
import { MusicComponent } from './components/music/music.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { Nl2brPipe } from '../pipes/nl2br.pipe';
import { HeaderComponent } from './components/header/header.component';
import { HighlightBadgeComponent } from './components/highlight-badge/highlight-badge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    LogoComponent,
    MusicComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
    Nl2brPipe,
    HeaderComponent,
    HighlightBadgeComponent,
    MenuComponent,
  ],
  imports: [CommonModule, MatDialogModule, FontAwesomeModule],
  exports: [
    LogoComponent,
    MusicComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
    HeaderComponent,
    HighlightBadgeComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
