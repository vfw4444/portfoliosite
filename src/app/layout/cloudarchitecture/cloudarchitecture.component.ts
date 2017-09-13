import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cloudarchitecture',
    templateUrl: './cloudarchitecture.component.html',
    styleUrls: ['./cloudarchitecture.component.scss']
})
export class CloudarchitectureComponent implements OnInit {
    public imagesItems: Array<any> = [];
    public webArchitecture: Array<any> = [];

    constructor() {

        let webArchitectureData = [
            {
                imagePath: 'assets/images/portfolio/cloud-architecture/image001.jpg',
                label: 'Amazon AWS Web architecture',
                text: 'EC2 & S2'
            }, {
                imagePath: 'assets/images/portfolio/cloud-architecture/image002.jpg',
                label: 'Microsoft Azure Web Architecture',
                text: 'SaaS, IaaS, PaaS'
            }, {
                imagePath: 'assets/images/portfolio/cloud-architecture/image003.jpg',
                label: "MS Windows &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Linux    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Mac OS",
                text: "<span class='short-text'>Desktop Server </span><span class='short-text'>Desktop Server</span><span class='short-text'>Desktop</span> "
            }]
        this.webArchitecture = webArchitectureData

        let items = [
            {
                imagePath: 'assets/images/portfolio/bigdata/hadoop.png',
                label: 'Hadoop',
            },            
            {
                imagePath: 'assets/images/portfolio/cloud-architecture/image011.jpg',
                label: 'HDInsight',
            },
            {
                imagePath: 'assets/images/portfolio/cloud-architecture/image012.jpg',
                label: 'Azure Machine Learning',
            },           
            {
                imagePath: 'assets/images/portfolio/cloud-architecture/image015.jpg',
                label: 'MongoDB', 
            }
        ]

        this.imagesItems = items
    }

    ngOnInit() {
    }
}
