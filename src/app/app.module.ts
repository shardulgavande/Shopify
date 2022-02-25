
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
import { PaymentComponent } from './component/payment/payment.component';

import { FooterComponent } from './component/footer/footer.component';
import { EditProfileComponent } from './component/user/edit-profile/edit-profile.component';
import { HomeheaderComponent } from './component/homeheader/homeheader.component';
import { CategoryComponent } from './component/category/category.component';
import { AddSubcategoryComponent } from './component/add-subcategory/add-subcategory.component';
import { AddCategorytypeComponent } from './component/add-categorytype/add-categorytype.component';
import { FilterPipe } from './shared/filter.pipe';
import { CartService } from './service/cart.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';



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
    PaymentComponent,
    FooterComponent,
    EditProfileComponent,
    HomeheaderComponent,
    CategoryComponent,
    AddSubcategoryComponent,
    AddCategorytypeComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private cartService:CartService,private router:Router){}




 }
