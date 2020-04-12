import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './components/general-components.module';
import { LoginComponent } from './screens/Login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { HomeModule } from './screens/Home/home.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, GeneralComponentsModule, ReactiveFormsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
