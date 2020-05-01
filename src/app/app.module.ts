import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponentsModule } from './components/general-components.module';
import { LoginComponent } from './screens/login/login.component';
import { HomeModule } from './screens/home/home.module';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { reducer as booksReducer } from './store/reducers/books.reducer';

@NgModule({
  declarations: [AppComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GeneralComponentsModule,
    ReactiveFormsModule,
    HomeModule,
    AppRoutingModule,
    StoreModule.forRoot({
      books: booksReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
