import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenuService } from '../../../Core/Services/menu.service';
import { MenuItem } from '../../../Core/models/menu.interface';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [LogoComponent, CommonModule, RouterModule],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    private menuService: MenuService,
    private router: Router,
  ) {
    this.menuItems = this.menuService.getMenuItems();

    console.log(this.menuItems, 'this.menuItems111');
  }
  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    console.log(this.menuItems, 'this.menuItems111');
  }
}
