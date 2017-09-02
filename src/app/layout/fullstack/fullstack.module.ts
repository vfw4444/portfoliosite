import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullstackRoutingModule } from './fullstack-routing.module';
import { FullstackComponent } from './fullstack.component';

@NgModule({
  imports: [
    CommonModule,
    FullstackRoutingModule
  ],
  declarations: [FullstackComponent]
})
export class FullstackModule { }
