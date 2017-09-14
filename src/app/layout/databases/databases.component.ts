import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-analytics',
    templateUrl: './databases.component.html',
    styleUrls: ['./databases.component.scss']
})
export class DatabasesComponent implements OnInit {
    public imagesItems: Array<any> = [];
    constructor() {

        let items = [
            {
                imagePath: 'assets/images/portfolio/bigdata/hive.jpg',
                label: 'Hive',
            },
            {
                imagePath: 'assets/images/portfolio/databases/azuresql.png',
                label: 'Azure SQL Server',
               
            },
            {
                imagePath: 'assets/images/portfolio/bigdata/hadoop.png',
                label: 'Hadoop',
               
            },
            {
                imagePath: 'assets/images/portfolio/databases/json.jpg',
                label: 'JSON',
            },
            {
                imagePath: 'assets/images/portfolio/databases/mongodb.jpg',
                label: 'MongoDB',
               
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssql.jpg',
                label: 'Microsoft SQL Server',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssas.jpg',
                label: 'Microsoft Analysis Services',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssrs.jpg',
                label: 'Microsoft Reporting Services',
            },
            {
                imagePath: 'assets/images/portfolio/databases/mysql.jpg',
                label: 'MySQL',
            },
            {
                imagePath: 'assets/images/portfolio/databases/oracle.jpg',
                label: 'Oracle', 
            },
            {
                imagePath: 'assets/images/portfolio/databases/postgresql.jpg',
                label: 'PostgreSQL',
            },
            {
                imagePath: 'assets/images/portfolio/databases/xml.jpg',
                label: 'XML',
            }
        ]

        this.imagesItems = items
    }

    ngOnInit() {
    }
}
