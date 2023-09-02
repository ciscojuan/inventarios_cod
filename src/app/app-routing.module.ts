import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductoComponent } from './components/get-product/get-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


const routes : Routes = [
  {path: 'products', component: GetProductoComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:id', component: EditProductComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
