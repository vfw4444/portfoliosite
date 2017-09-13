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
                imagePath: 'assets/images/portfolio/analytics/tools/XLpowerBI.jpg',
                label: 'XL powerBI',
            }
            {
                imagePath: 'assets/images/portfolio/analytics/crystal.jpg',
                label: 'Crystal',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/rlanguage.jpg',
                label: 'R Language',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/python.jpg',
                label: 'Python Language',
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
                label: 'Producing Data Quality',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssas.jpg',
                label: 'MS SQL - Data Warehouse ',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssis.png',
                label: 'MS SQL Integration - ETL',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/erp.jpg',
                label: 'ERP',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/qbenterprise.jpg',
                label: 'Quick Books Enterprise',
            },
            {
                imagePath: 'assets/images/portfolio/analytics/sage.jpg',
                label: 'Sage ERPs',
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
                imagePath: 'assets/images/portfolio/full-stack/salesforce.jpg',
                label: 'SalesForce',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/dynamicsNAV.jpg',
                label: 'MS Dynamics NAV',
            },
            
           
                      
        ]

        this.imagesItems = items
    }
}
