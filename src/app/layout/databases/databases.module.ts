import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabasesRoutingModule } from './databases-routing.module';
import { DatabasesComponent } from './databases.component';

@NgModule({
  imports: [
    CommonModule,
    DatabasesRoutingModule
  ],
  declarations: [DatabasesComponent]
})
export class DatabasesModule { }
