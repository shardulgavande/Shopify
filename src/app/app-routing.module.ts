import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './component/admin/admin-registration/admin-registration.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {path: '',redirectTo:'product', pathMatch:'full'},
  {path: 'product', component:ProductComponent},
  {path: 'dashboard/products/add', component: AddProductComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/products/list', component: ProductListComponent},
  {path: 'dashboard/products/edit/:id', component: EditProductComponent},
  //{path: 'dashboard/products/delete/:id', component: ProductListComponent}
  {path:'login', component:LoginComponent},
  {path:'register' , component:RegistrationComponent},
  {path:'payment' , component:PaymentComponent},
  {path:'adminregister' , component:AdminRegistrationComponent},
  {path:'adminlogin' , component:AdminLoginComponent},
  {path:'home' , component:HomeComponent},
  {path:'users/cart' , component:CartComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
