import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AnalyticsChartsRoutingModule } from './analytics-charts-routing.module';
import { AnalyticsChartsComponent } from './analytics-charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        AnalyticsChartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [AnalyticsChartsComponent]
})
export class AnalyticsChartsModule { }
