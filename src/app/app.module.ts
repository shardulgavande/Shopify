
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './component/product-list/product-list.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegistrationComponent } from './component/user/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './component/admin/admin-registration/admin-registration.component';
import { HomeComponent } from './component/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    CartComponent,
    AddProductComponent,
    DashboardComponent,
    ProductListComponent,
    EditProductComponent,
    LoginComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
