import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [ButtonComponent],
})
export class FormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
