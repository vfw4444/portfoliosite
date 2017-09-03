import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
            { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule' },
            { path: 'databases', loadChildren: './databases/databases.module#DatabasesModule' },
            { path: 'fullstack', loadChildren: './fullstack/fullstack.module#FullstackModule' },
            { path: 'big-data', loadChildren: './bigdata/bigdata.module#BigdataModule' },
            { path: 'cloud-architecture', loadChildren: './cloudarchitecture/cloudarchitecture.module#CloudarchitectureModule' },
            { path: 'analytics-charts', loadChildren: './analytics-charts/analytics-charts.module#AnalyticsChartsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'd3charts', loadChildren: './D3charts/D3charts.module#D3chartsModule' },
            { path: 'contact-me', loadChildren: './contact-me/contact-me.module#ContactMeModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
