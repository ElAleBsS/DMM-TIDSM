import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrssIndicatorsPage } from './progrss-indicators.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrssIndicatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrssIndicatorsPageRoutingModule {}
