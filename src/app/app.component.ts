import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router : Router){}
  name = 'Angular ' + VERSION.major;

  

  InputNote(){
    this.router.navigate(["/halaman1"]);
  }

  FavNote(){
    this.router.navigate(["/halaman3"]);
  }
}
