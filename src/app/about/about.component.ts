import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mall: any[] = [
    {
      "name": "Phoenix Mall",
      "description": "Phoenix Market City is a shopping mall developed by Phoenix Mills Limited located in Pune, Maharashtra. It was opened in January 2011 and is one of the largest malls in India, with the area of 3.4 million square feet. It is located in the Vimannagar area of Pune."
    },
    {
      "name": "Amanora Mall",
      "description": "Amanora Park Town is a township project based near Hadapsar, Pune opposite to the Magarpatta township, in India. The project is developed by the City Corporation Limited, a real estate firm operating under the chairmanship of Aniruddha Deshpande. The township project comes under the Government of Maharashtra's special township policy"
    },
    {
      "name": "Seasons Mall",
      "description": "All stores, sales, restaurants, events, offers, brands, movies, entertainment in Seasons Mall Pune. Seasons Mall is the story of how a handful of visionaries took an ordinary idea like a shopping centre and turned it into a world-class destination. Built on a plot of 12 acres, the Mall is a located within Magarpatta City and representing a unique destination, with stores, attractions and services combining to form the most comprehensive and integrated retail, hospitality and entertainment complex."
    }
  ];
  constructor() { }
 

  ngOnInit() {
  }

}
