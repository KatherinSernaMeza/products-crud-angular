import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';
import { ShareModule } from './shared/share.module';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [CoreModule, AppRoutingModule, ShareModule],
  exports: [],
  declarations: [FeaturesComponent],
  providers: [],
})
export class AppModule {}
