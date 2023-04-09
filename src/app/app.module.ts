import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
// import { HttpErrorResponse } from '@angular/common/http'; 

 
@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    ListRestoComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    AddToCartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
