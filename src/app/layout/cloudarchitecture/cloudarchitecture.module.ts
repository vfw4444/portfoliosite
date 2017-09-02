import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudarchitectureRoutingModule } from './cloudarchitecture-routing.module';
import { CloudarchitectureComponent } from './cloudarchitecture.component';

@NgModule({
  imports: [
    CommonModule,
    CloudarchitectureRoutingModule
  ],
  declarations: [CloudarchitectureComponent]
})
export class CloudarchitectureModule { }
