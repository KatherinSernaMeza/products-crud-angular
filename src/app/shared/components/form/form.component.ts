import { productService } from './../../../Core/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../../../Core/models/products.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
})
export class FormComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: productService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.getCreateUpdateForm();
  }

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

  isUpdate: boolean = false;

  onSubmit(form: NgForm): void {
    // event.preventDefault();
    // Aquí puedes agregar tu lógica para manejar el envío del formulario
    console.log('Form submitted', form);
    if (this.isUpdate) {
      //  this.updateProduct(form.value);
    }
  }

  back() {
    this.router.navigate(['/products']);
  }

  updateProduct(product: product): void {
    //this.productService.updateProduct(product).subscribe(() => this.back());
  }

  getCreateUpdateForm(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Access the 'id' parameter from the URL
      if (this.router.url === '/update/' + id) {
        console.log('update', this.router.url);
        this.isUpdate = true;
      } else {
        console.log('Create', this.router.url);
        this.isUpdate = false;
      }
    });
  }
}
