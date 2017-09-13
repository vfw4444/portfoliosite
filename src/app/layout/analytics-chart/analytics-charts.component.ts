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
                imagePath: 'assets/images/portfolio/analytics/tools/tableau.png',
                label: 'Tableau',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/tools/crystal.jpg',
                label: 'D3.js',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/tools/XLpowerBI.jpg',
                label: 'XL powerBI',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/tools/crystal.jpg',
                label: 'Crystal',
            },
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
                imagePath: 'assets/images/portfolio/analytics/azurehdinsight.jpg',
                label: 'Azure HDInsight',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/dataquality.jpg',
                label: '|Ensuring Data Quality - from these sources:',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/dataself103-featured.jpg',
                label: 'DataSelf Analytics - ETL',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/crm.jpg',
                label: 'Customer Relationship Management Systems (CRM)',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/salesforce.jpg',
                label: 'SalesForce',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/suitecrm.jpg',
                label: 'SuiteCRM',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/vtigercrm.jpg',
                label: 'VTiger CRM',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/erp.jpg',
                label: 'Enterprise Resource Planning Systems',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/msnav.jpg',
                label: 'MS Dynamics NAV',
               
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sagesoftware.jpg',
                label: 'Sage Software',
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
                imagePath: 'assets/images/portfolio/analytics/qb.jpg',
                label: 'QuickBooks',
               
            },
            {
                imagePath: 'assets/images/portfolio/analytics/qbenterprise.jpg',
                label: 'QuickBook Enterprise',
            }
        ]

        this.imagesItems = items
    }
}
