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
                imagePath: 'assets/images/portfolio/databases/hive.png',
                label: 'Hive',
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
                imagePath: 'assets/images/portfolio/databases/msssas.jpg',
                label: 'Microsoft Analysis Services',
            },
            {
                imagePath: 'assets/images/portfolio/databases/msssrs.jpg',
                label: 'Microsoft Reporting Services',
            },
            {
                imagePath: 'assets/images/portfolio/databases/mysql_logo.png',
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
