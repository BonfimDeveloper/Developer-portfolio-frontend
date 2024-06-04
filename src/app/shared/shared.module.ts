import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicComponent } from './components/music/music.component';

@NgModule({
  declarations: [LogoComponent, MusicComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  exports: [LogoComponent, MusicComponent],
})
export class SharedModule {}
