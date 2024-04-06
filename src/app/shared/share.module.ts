import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [HttpClientModule, RouterModule],
  exports: [HttpClientModule, RouterModule],
  declarations: [],
  providers: [],
})
export class ShareModule {}
