import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bigdata',
    templateUrl: './bigdata.component.html',
    styleUrls: ['./bigdata.component.scss']
})
export class BigdataComponent implements OnInit {
    public imagesitems: Array<any> = [];
    constructor() {
        let items = [
            {
                imagePath: 'assets/images/portfolio/bigdata/hadoop.png',
                label: 'Hadoop',
            },
            {
                imagePath: 'assets/images/portfolio/bigdata/json.jpg',
                label: 'JSON',
            },
            {
                imagePath: 'assets/images/portfolio/bigdata/mongodb.jpg',
                label: 'MongoDB',
               
            },
            {
                imagePath: 'assets/images/portfolio/databases/mssql.png',
                label: 'MS SQL Server',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssas.jpg',
                label: 'MS SQL Analysis Services',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssrs.jpg',
                label: 'MS Reporting Services',
            },
            {
                imagePath: 'assets/images/portfolio/databases/azuresql.png',
                label: 'MS Azure SQL', 
            },
            {
                imagePath: 'assets/images/portfolio/bigdata/azuremachinelearning.jpg',
                label: 'Azure Machine Learning',
            },
            {
                imagePath: 'assets/images/portfolio/bigdata/hive.jpg',
                label: 'Hive',
            },
            {
                imagePath: 'assets/images/portfolio/databases/xml.jpg',
                label: 'XML',
            },
            {
                imagePath: 'assets/images/portfolio/bigdata/azurepowerbiembedded.png',
                label: 'Azure Power BI Embedded',
            },
            {
                imagePath: 'assets/images/portfolio/cloud-architecture/image011.jpg',
                label: 'HDInsight',
            }
            
        ]

        this.imagesitems = items
    
    
    }

    ngOnInit() {
    }
}
