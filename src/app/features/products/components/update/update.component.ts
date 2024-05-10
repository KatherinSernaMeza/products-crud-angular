import { Component } from '@angular/core';
import { FormComponent } from '../../../../shared/components/form/form.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
  standalone: true,
  imports: [FormComponent, ButtonComponent],
})
export class UpdateComponent {}
