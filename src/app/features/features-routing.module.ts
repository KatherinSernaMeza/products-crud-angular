import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { CreateComponent } from './products/components/create/create.component';
import { UpdateComponent } from './products/components/update/update.component';
import { ProductComponent } from './products/components/product/product.component';
import { ListProductsComponent } from './products/components/list-products/list-products.component';
import { FeaturesComponent } from './features.component';

export const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeDashboardComponent },
      { path: 'create', component: CreateComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'products', component: ListProductsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
