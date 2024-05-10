import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
  standalone: true,
  imports: [CardComponent],
})
export class ListProductsComponent {}
