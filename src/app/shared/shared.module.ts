import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FilterPipeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NopagefoundComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NopagefoundComponent
  ]
})
export class SharedModule {}
