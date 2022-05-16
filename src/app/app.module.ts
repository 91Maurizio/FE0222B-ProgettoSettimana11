import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContextComponent } from './components/context/context.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Route [] = [
  { path: '', component: HomeComponent},
  { path: 'cart', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ContextComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
