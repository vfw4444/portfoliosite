import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fullstack',
    templateUrl: './fullstack.component.html',
    styleUrls: ['./fullstack.component.scss']
})
export class FullstackComponent implements OnInit {
    public imagesItems: Array<any> = [];
    constructor() {

        let items = [
            {
                imagePath: 'assets/images/portfolio/full-stack/angular2.jpg',
                label: 'Angular 2',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/angular4.jpg',
                label: 'Angular 2',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/aspnet.jpg',
                label: 'ASP .NET',
               
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/bootstrap.jpg',
                label: 'Bootstraps',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/c-shop.jpg',
                label: 'C#',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/java.jpg',
                label: 'Java',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/javascript.jpg',
                label: 'Javascript', 
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/jquery.jpg',
                label: 'jQuery',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/nodejs.jpg',
                label: 'NodeJS',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/angularjs.jpg',
                label: 'Angular JS',
               
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/php.jpg',
                label: 'PHP',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/python.jpg',
                label: 'Python',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/rlanguage.jpg',
                label: 'R Langauge',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/salesforce.jpg',
                label: 'Sales Force',
               
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/typescript-logo.jpg',
                label: 'TypeScript',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/crm.jpg',
                label: 'CRM',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/drupal.jpg',
                label: 'Drupal',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/joomla.jpg',
                label: 'Joomla',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/LINQ_logo.jpg',
                label: 'Microsoft LINQ',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/msvb.jpg',
                label: 'Microsoft Visual Studio',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/suitecrm.jpg',
                label: 'CRM Suite',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/vscode.jpg',
                label: 'VS code',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/vtiger.jpg',
                label: 'Vtiger',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/wordpress.jpg',
                label: 'Wordpress',
            },
        ]

        this.imagesItems = items
    }

    ngOnInit() {
    }
}
