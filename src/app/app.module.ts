import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './components/general-components.module';
import { LoginComponent } from './screens/login/login.component';
import { HomeModule } from './screens/home/home.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, GeneralComponentsModule, ReactiveFormsModule, HomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
