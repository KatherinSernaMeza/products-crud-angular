import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { ShareModule } from '../shared/share.module';

@NgModule({
  imports: [FeaturesRoutingModule, ShareModule],
  exports: [FeaturesRoutingModule, ShareModule],
  declarations: [],
  providers: [],
})
export class FeaturesModule {
  constructor() {}
}
