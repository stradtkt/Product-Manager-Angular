import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromProducts from './products';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products',
    children: [
      {path: '', component: fromProducts.ProductListComponent, pathMatch: 'full'},
      {path: 'new', component: fromProducts.ProductCreateComponent},
      {path: ':product_id', component: fromProducts.ProductDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
