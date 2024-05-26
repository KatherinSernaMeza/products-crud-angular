import { product } from './../../../../Core/models/products.interface';
import { Component } from '@angular/core';
import { FormComponent } from '../../../../shared/components/form/form.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BoxComponent } from '../../../../shared/components/box/box.component';
import { ActivatedRoute, Router } from '@angular/router';
import { productService } from '../../../../Core/Services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
  imports: [FormComponent, ButtonComponent, BoxComponent, NgFor],
})
export class ProductComponent {
  product: product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: '',
    category: '',
    sku: '',
    weight: 0,
    dimensions: {},
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    reviews: [],
    returnPolicy: '',
    minimumOrderQuantity: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private productService: productService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', id);
      this.getProduct(id);
    });
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      (data: product) => {
        this.product = data;
        console.log('productos', data); // Imprime producto
      },
      (error) => {
        console.error('Error fetching products', error);
      },
    );
  }
  back() {
    this.router.navigate(['/products']);
  }
}
