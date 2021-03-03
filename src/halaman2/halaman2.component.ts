import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {

  constructor(private router : ActivatedRoute, public datanotes : GlobalvarService){
    
  }
  
  judulnote:string[] = this.datanotes.getJudulnote();
  isinote:string[] = this.datanotes.getIsinote();
  tglnote:string[] = this.datanotes.getTglnote();
  count = this.datanotes.getCounter(); 

  // Favorite(){

  // }

  ngOnInit() {
 
  }

}