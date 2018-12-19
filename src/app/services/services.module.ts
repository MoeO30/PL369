import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService, SidebarService, SharedService,
        UsuariosService, DatabaseService, DatabaseComponentService, MetalogroService } from './service.index';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
       CommonModule,
       DataTablesModule
      ],
  providers: [
    SettingService,
    SidebarService,
    SharedService,
    UsuariosService,
    DatabaseService,
    DatabaseComponentService,
    MetalogroService
  ],
  declarations: []
})
export class ServicesModule {}
