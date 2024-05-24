import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { productService } from './Services/product.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [productService],
})
export class CoreModule {}
