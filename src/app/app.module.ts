import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
