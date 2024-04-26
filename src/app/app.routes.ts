import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/features.routes').then((m) => m.FEATURES_ROUTES),
  },
  { path: '**', component: PageNotFoundComponent },
];
