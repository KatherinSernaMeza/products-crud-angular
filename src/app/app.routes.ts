import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: PageNotFoundComponent },
];
