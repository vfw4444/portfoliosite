import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    animations: [routerTransition()]
})
export class PortfolioComponent implements OnInit {
    public imagesItems: Array<any> = []
    public sliders: Array<any> = []
    public videoPath: String

    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'SMARTiMarketing.com',
            text: 'All in One- CRM - Automated SMS, Email, IVR iMarketing'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Custom CRM',
            text: 'Cloud Analyics Reports '
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Integration',
            text: 'Cloud Infrastructure'
        });  
        
    }

    ngOnInit() {
        this.getImageItems()
        this.videoPath = 'assets/videos/video.mp4'
    }

    public getImageItems() {
        let items = [
           
            {
                imagePath: 'assets/images/portfolio/certification/csucircle.jpg',
                label: 'Bachelors Degree',
            },
            {
                imagePath: 'assets/images/portfolio/certification/pepperdine.jpg',
                label: 'MBA studies',
            },
            {
                imagePath: 'assets/images/portfolio/certification/mscertifiedtrainer.jpg',
                label: 'Microsoft Certified Trainer',
            },
            {
                imagePath: 'assets/images/portfolio/certification/mspro.jpg',
                label: 'Microsoft Certified Professional',
            },
            {
                imagePath: 'assets/images/portfolio/certification/certifiedmsnav.jpg',
                label: 'Microsoft Dynamics Certified',
            },
            {
                imagePath: 'assets/images/portfolio/certification/sage-certified.jpg',
                label: 'Sage Certified',
            }
        ]

        this.imagesItems = items
    }
}
