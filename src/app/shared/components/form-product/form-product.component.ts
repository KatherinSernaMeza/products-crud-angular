import { Component } from '@angular/core';
import { product } from '../../../Core/models/products.interface';
import { productService } from './../../../Core/Services/product.service';
import { FormComponent } from '../../../shared/components/form/form.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormComponent, ButtonComponent, FormsModule, NgIf],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.scss',
})
export class FormProductComponent {
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
  idProduct: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: productService,
  ) {}

  ngOnInit(): void {
    this.getCreateUpdateForm();
  }

  isUpdate: boolean = false;

  onSubmit(form: NgForm): void {
    //event.preventDefault();
    // Aquí puedes agregar tu lógica para manejar el envío del formulario
    console.log('Form submitted', form.value);
    if (this.isUpdate) {
      this.updateProduct(form.value);
    } else {
      this.createProduct(form.value);
    }
  }

  back() {
    this.router.navigate(['/products']);
  }

  updateProduct(product: product): void {
    this.productService
      .updateProduct(product, this.product.id)
      .subscribe(() => this.back());
  }

  getCreateUpdateForm(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Access the 'id' parameter from the URL
      if (this.router.url === '/update/' + id) {
        console.log('update', this.router.url);
        this.getProduct(id);
        this.isUpdate = true;
      } else {
        console.log('Create', this.router.url);
        this.isUpdate = false;
      }
    });
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      (res: product) => {
        this.product = res;
        console.log('productos', res); // Imprime producto
      },
      (error) => {
        console.error('Error fetching products', error);
      },
    );
  }

  createProduct(product: product): void {
    this.productService.addNewProduct(product).subscribe(() => this.back());
  }
}
