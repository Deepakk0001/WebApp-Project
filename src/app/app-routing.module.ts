import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


const routes: Routes = [
  {path:"add" , component:AddRestoComponent},
  {path :"list" , component : ListRestoComponent},
  {path : "login" , component:LoginComponent},
  {path : "register" , component :RegisterComponent},
  {path : "update/:id" , component:UpdateComponent},
  {path : "AddToCart" , component:AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
