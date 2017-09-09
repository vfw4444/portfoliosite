import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsChartsComponent } from './analytics-charts.component';

const routes: Routes = [
    { path: '', component: AnalyticsChartsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalyticsChartsRoutingModule { }
