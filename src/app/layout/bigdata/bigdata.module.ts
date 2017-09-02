import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigdataRoutingModule } from './bigdata-routing.module';
import { BigdataComponent } from './bigdata.component';

@NgModule({
  imports: [
    CommonModule,
    BigdataRoutingModule
  ],
  declarations: [BigdataComponent]
})
export class BigdataModule { }
