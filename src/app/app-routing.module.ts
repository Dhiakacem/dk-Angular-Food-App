import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path : 'search/:searchTerm' , component:HomeComponent},
  {path : 'tag/:tag' , component:HomeComponent},
  {path : 'food/:id' , component:FoodPageComponent},
  {path : 'cart-page' , component:CartPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
