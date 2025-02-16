import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatDividerModule } from '@angular/material/divider';
import { ContatoComponent } from './components/contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { TypingEffectDirective } from '../core/directives/typing-effect.directive.ts.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    ProjetosComponent,
    ServicosComponent,
    TypingEffectDirective,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatDividerModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class PagesModule {}
