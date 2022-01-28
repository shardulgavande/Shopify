import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'dashboard/products/add', component: AddProductComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/products/list', component: ProductListComponent},
  {path: 'dashboard/products/edit/:id', component: EditProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
