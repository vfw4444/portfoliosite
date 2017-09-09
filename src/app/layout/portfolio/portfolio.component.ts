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
            label: 'My CRM',
            text: 'Online Data Reports '
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
                imagePath: 'assets/images/portfolio/certification/certifiedmsnav.jpg',
                label: 'Mircrosoft Dynamics Certified',
            },
            {
                imagePath: 'assets/images/portfolio/certification/csucircle.jpg',
                label: 'California State University',
            },
            {
                imagePath: 'assets/images/portfolio/certification/mscertifiedtrainer.jpg',
                label: 'Mircrosoft Certified Trainer',
               
            },
            {
                imagePath: 'assets/images/portfolio/certification/mspro.jpg',
                label: 'Mircrosoft Certified Professional',
            },
            {
                imagePath: 'assets/images/portfolio/certification/pepperdine.jpg',
                label: 'Pepperdine University',
            },
            {
                imagePath: 'assets/images/portfolio/certification/sage-certified.jpg',
                label: 'Cage Certified cunsultant',
            }
        ]

        this.imagesItems = items
    }
}
