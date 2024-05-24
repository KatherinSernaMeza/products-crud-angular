import { MenuComponent } from './shared/components/menu/menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContainerComponent } from './shared/components/container/container.component';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'products-crud-angular';
}
