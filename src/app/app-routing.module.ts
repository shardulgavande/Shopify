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
import { EditProfileComponent } from './component/user/edit-profile/edit-profile.component';
import { HomeheaderComponent } from './component/homeheader/homeheader.component';
import { AddSubcategoryComponent } from './component/add-subcategory/add-subcategory.component';
import { AuthGuard } from './shared/auth.guard';
import { CategoryComponent } from './component/category/category.component';
import { AddCategorytypeComponent } from './component/add-categorytype/add-categorytype.component';


const routes: Routes = [
  {path: '',redirectTo:'product', pathMatch:'full'},
  {path: '', component:ProductComponent},
  {path: 'dashboard/products/add', component: AddProductComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'dashboard/products/list', component: ProductListComponent},
  {path: 'dashboard/products/edit/:id', component: EditProductComponent},
  //{path: 'dashboard/products/delete/:id', component: ProductListComponent}
  {path:'login', component:LoginComponent},
  {path:'register' , component:RegistrationComponent},
  {path:'adminregister' , component:AdminRegistrationComponent},
  {path:'adminlogin' , component:AdminLoginComponent},
  {path:'home' , component:HomeComponent,canActivate:[AuthGuard]},
  {path:'users/cart' , component:CartComponent,canActivate:[AuthGuard]},
  {path:'payment' , component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'category', component:CategoryComponent},
  {path:'subcategory' , component:AddSubcategoryComponent,canActivate:[AuthGuard]},
  {path:'editprofile' , component:EditProfileComponent,canActivate:[AuthGuard]},
  {path:'categorytype' , component:AddCategorytypeComponent,canActivate:[AuthGuard]},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
