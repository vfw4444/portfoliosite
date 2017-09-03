import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-analyticsCharts',
    templateUrl: './analytics-charts.component.html',
    styleUrls: ['./analytics-charts.component.scss'],
    animations: [routerTransition()]
})
export class AnalyticsChartsComponent implements OnInit {
    public imagesItems: Array<any> = [];
    constructor() {
    }

    ngOnInit() {
        this.getImageItems()
    }

    public getImageItems() {
        let items = [
            {
                imagePath: 'assets/images/portfolio/analytics/apachestorm.jpg',
                label: 'Apache Storm',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/peachtree.jpg',
                label: 'Peachtree',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/azuremachinelearning.jpg',
                label: 'Azure Machine Learning',
               
            },
            {
                imagePath: 'assets/images/portfolio/analytics/crystal.jpg',
                label: 'Crystal',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/azurehdinsight.jpg',
                label: 'Azure HDInsight',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/dataquality.jpg',
                label: 'Data Quality',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/dataself103-featured.jpg',
                label: 'DataSelf Analytics',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/erp.jpg',
                label: 'ERP',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/qb.jpg',
                label: 'Quick Book',
               
            },
            {
                imagePath: 'assets/images/portfolio/analytics/qbenterprise.jpg',
                label: 'Quick Book Eenterprise',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sage.jpg',
                label: 'Sage',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sage100.jpg',
                label: 'Sage 100',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sage200.jpg',
                label: 'Sage 200',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sage500.jpg',
                label: 'Sage 500',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sagesoftware.jpg',
                label: 'Sage Software',
               
            },
            {
                imagePath: 'assets/images/portfolio/analytics/XLpowerBI.jpg',
                label: 'XL powerBI',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/Customer-ShipTos.jpg',
                label: 'Customer ShipTo',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/Customer-Trends.jpg',
                label: 'Customer Trends',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/Top-Customers-and-Top-Products-Sales.jpg',
                label: 'Top Customers and Top Products Sales',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/Top-Products-by-Sales-ShipTo-Sales.jpg',
                label: 'Top Products by Sales ShipTo Sales',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/Top-Sales-and-GP-This-Year.jpg',
                label: 'Top Sales and GP This Year',
            }
        ]

        this.imagesItems = items
    }
}
