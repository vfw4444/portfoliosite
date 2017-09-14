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
                imagePath: 'assets/images/portfolio/full-stack/Stacks/net.png',
                label: '.NET',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/Stacks/asp-mvc.png',
                label: 'ASP .NET MVC',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/c-sharp.jpg',
                label: 'C# .NET',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/vbnet.jpg',
                label: 'VB .NET', 
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/LINQ_logo.jpg',
                label: 'Microsoft LINQ',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/java.jpg',
                label: 'Java',
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
                imagePath: 'assets/images/portfolio/full-stack/Stacks/agile.png',
                label: 'Agile Scrum',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/Stacks/mean-stack.png',
                label: 'MEAN Stack',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/angular2.jpg',
                label: 'Angular 2',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/angular4.jpg',
                label: 'Angular 4',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/expressjs.jpg',
                label: 'Express JS',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/nodejs.jpg',
                label: 'NodeJS',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/bootstrap.jpg',
                label: 'Bootstraps',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/typescript-logo.jpg',
                label: 'TypeScript',
            },
            {
                imagePath: 'assets/images/portfolio/databases/mongodb.jpg',
                label: 'Mongo DB',
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
                imagePath: 'assets/images/portfolio/full-stack/vscode.jpg',
                label: 'VS code',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/Stacks/lamp-stack.png',
                label: 'LAMP Stack',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/php.jpg',
                label: 'PHP',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/apache.png',
                label: 'Apache Web Server',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/solr.png',
                label: 'SOLR Web Server',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/tomcat.jpg',
                label: 'Tomcat Web Server',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/crm.jpg',
                label: 'Customer Relationship Management',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/salesforce.jpg',
                label: 'Sales Force CRM',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/vtiger.jpg',
                label: 'Vtiger',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/suitecrm.jpg',
                label: 'SuiteCRM',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/drupal.jpg',
                label: 'Drupal',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/wordpress.jpg',
                label: 'Word Press',
            },
            {
                imagePath: 'assets/images/portfolio/full-stack/webapps/joomla.jpg',
                label: 'Joomla',
            },
        ]

        this.imagesItems = items
    }

    ngOnInit() {
    }
}
