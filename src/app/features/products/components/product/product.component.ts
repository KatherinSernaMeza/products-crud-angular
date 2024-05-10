import { Component } from '@angular/core';
import { FormComponent } from '../../../../shared/components/form/form.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BoxComponent } from '../../../../shared/components/box/box.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
  imports: [FormComponent, ButtonComponent, BoxComponent],
})
export class ProductComponent {}
