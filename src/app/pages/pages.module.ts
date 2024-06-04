import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PagesRoutingModule, MatDividerModule],
})
export class PagesModule {}
