import { PagesModule } from './pages.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/my-port', pathMatch: 'full' }, // Redireciona de '' para '/pages/home'
  { path: 'my-port', component: MainComponent },

  { path: 'about', component: SobreComponent },
  { path: 'projects', component: ProjetosComponent },
  { path: 'services', component: ServicosComponent },
  { path: 'contact', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
