import { productService } from './../../../../Core/Services/product.service';
import { product } from './../../../../Core/models/products.interface';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
  standalone: true,
  imports: [CardComponent],
})
export class ListProductsComponent {
  products: product[] = [];
  constructor(private productService: productService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  addNewProduct(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
  ): void {
    title = title.trim();
    description = description.trim();
    brand = brand.trim();
    category = category.trim();
    thumbnail = thumbnail.trim();

    if (
      id ||
      !title ||
      !price ||
      !discountPercentage ||
      !rating ||
      !stock ||
      !description ||
      !brand ||
      !category ||
      !thumbnail
    ) {
      return;
    }
    this.productService.addNewProduct({} as product).subscribe((product) => {
      this.products.push(product);
    });
  }

  delete(product: product): void {
    this.products = this.products.filter((p) => p !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }
}
