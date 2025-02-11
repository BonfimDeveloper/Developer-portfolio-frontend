import { PagesModule } from './pages.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }, // Redireciona de '' para '/pages/home'
  { path: 'home', component: HomeComponent },
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
