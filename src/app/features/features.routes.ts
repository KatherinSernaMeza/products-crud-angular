import { Routes } from '@angular/router';
import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';
import { ProductComponent } from './products/components/product/product.component';
import { ListProductsComponent } from './products/components/list-products/list-products.component';
import { FormProductComponent } from '../shared/components/form-product/form-product.component';

export const FEATURES_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeDashboardComponent,
    data: { menuItem: { label: 'Home', icon: 'home' } },
  },
  { path: 'create', component: FormProductComponent },
  { path: 'update/:id', component: FormProductComponent },
  { path: 'product/:id', component: ProductComponent },
  {
    path: 'products',
    component: ListProductsComponent,
    data: { menuItem: { label: 'Products', icon: 'products' } },
  },
];
