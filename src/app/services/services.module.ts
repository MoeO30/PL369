import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService, SidebarService, SharedService, PagesService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  SettingService,
  SidebarService,
  SharedService,
  PagesService
  ],
  declarations: []
})
export class ServicesModule { }
