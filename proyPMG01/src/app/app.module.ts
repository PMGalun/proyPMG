import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/miscarpetas/logo-ap/logo-ap.component';
import { RedesComponent } from './components/miscarpetas/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
