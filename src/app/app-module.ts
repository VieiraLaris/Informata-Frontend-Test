import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CadastroComponent } from './cadastro/cadastro';
import { LoginComponent } from './login/login';
import { CatalogoComponent } from './catalogo/catalogo';

import { providePrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import Aura from '@primeuix/themes/aura';
import { TableComponent } from './table-component/table-component';


@NgModule({
  declarations: [
    App,
    CadastroComponent,
    LoginComponent,
    CatalogoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,      
    InputTextModule, 
    PasswordModule,
    DataViewModule,
    TagModule,
    FormsModule,
    TableModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [App]
})
export class AppModule { }
