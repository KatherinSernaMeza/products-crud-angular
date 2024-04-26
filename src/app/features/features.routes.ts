import { Routes } from '@angular/router';
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { CreateComponent } from './products/components/create/create.component';
import { UpdateComponent } from './products/components/update/update.component';
import { ProductComponent } from './products/components/product/product.component';
import { ListProductsComponent } from './products/components/list-products/list-products.component';

export const FEATURES_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeDashboardComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ListProductsComponent },
];
