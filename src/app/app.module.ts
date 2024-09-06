import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PopupInformationComponent } from './shared/components/popup-information/popup-information.component';
import { PopupConfirmationComponent } from './shared/components/popup-confirmation/popup-confirmation.component';
import { PopupErrorComponent } from './shared/components/popup-error/popup-error.component';
import { SeguridadModule } from './modules/seguridad/seguridad.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PopupInformationComponent,
    PopupConfirmationComponent,
    PopupErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
