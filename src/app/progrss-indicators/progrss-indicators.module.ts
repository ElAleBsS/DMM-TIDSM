import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrssIndicatorsPageRoutingModule } from './progrss-indicators-routing.module';

import { ProgrssIndicatorsPage } from './progrss-indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrssIndicatorsPageRoutingModule
  ],
  declarations: [ProgrssIndicatorsPage]
})
export class ProgrssIndicatorsPageModule {}
