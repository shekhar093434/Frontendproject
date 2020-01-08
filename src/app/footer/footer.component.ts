import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  public show:boolean = false;
  public buttonName:any = 'Chat with us';
  togglecolor:boolean = true;

  toggle() {
    this.togglecolor = !this.togglecolor;
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Close the chat";
    else
      this.buttonName = "Chat with us";
  }

  constructor() { }

  ngOnInit() {
  }
  
}
