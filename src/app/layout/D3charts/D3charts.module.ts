import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { D3chartsRoutingModule } from './D3charts-routing.module';
import { D3chartsComponent } from './D3charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        D3chartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [D3chartsComponent]
})
export class D3chartsModule { }
