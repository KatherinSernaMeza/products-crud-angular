import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menu.interface'; // Importa la interfaz MenuItem
import { FEATURES_ROUTES } from '../../features/features.routes';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private router: Router) {}

  getMenuItems(): MenuItem[] {
    console.log('this.router.config', this.router.config[0]);
    const menuItems: MenuItem[] = [];
    FEATURES_ROUTES.forEach((route) => {
      if (route.data && route.data['menuItem'] && route.path) {
        menuItems.push({
          label: route.data['menuItem'].label,
          route: route.path,
        });
      }
    });
    return menuItems;
  }
}
