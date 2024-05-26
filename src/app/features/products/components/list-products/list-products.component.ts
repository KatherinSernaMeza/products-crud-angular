import { productService } from './../../../../Core/Services/product.service';
import { product } from './../../../../Core/models/products.interface';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { CoreModule } from '../../../../Core/core.module';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GetProductsResponse } from '../../../../Core/models/productsResponse.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
  standalone: true,
  imports: [CardComponent, CoreModule, NgClass, NgFor, FormsModule],
})
export class ListProductsComponent {
  products: product[] = [];
  search: string = '';
  constructor(
    private productService: productService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (data: GetProductsResponse) => {
        this.products = data.products;
        console.log('Products:', this.products); // Imprime el arreglo de productos en la consola
      },
      (error) => {
        console.error('Error fetching products', error);
      },
    );
  }

  searchProducts(term: string): void {
    if (term === '') {
      this.getProducts();
    } else {
      this.productService
        .searchProducts(term)
        .subscribe((products) => (this.products = products.products));
    }
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

  delete(id: number): void {
    console.log(id, 'product');
    this.products = this.products.filter((p) => p.id !== id);
    this.productService.deleteProduct(id).subscribe();
  }

  goToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  goToProductUpdate(id: number): void {
    this.router.navigate(['/update', id]);
  }

  goToAddProduct(): void {
    this.router.navigate(['/create']);
  }
}
