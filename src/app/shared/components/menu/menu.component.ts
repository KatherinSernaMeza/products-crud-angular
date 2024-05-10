import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [LogoComponent],
})
export class MenuComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
