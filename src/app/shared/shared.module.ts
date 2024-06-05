import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { MusicComponent } from './components/music/music.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [LogoComponent, MusicComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [LogoComponent, MusicComponent, PageNotFoundComponent],
})
export class SharedModule {}
