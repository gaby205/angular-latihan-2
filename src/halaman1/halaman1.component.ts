import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman1',
  templateUrl: './halaman1.component.html',
  styleUrls: ['./halaman1.component.css']
})
export class Halaman1Component implements OnInit {

  constructor(private router : ActivatedRoute, public datanotes : GlobalvarService){}
  judulnote:string[];
  isinote:string[];
  tglnote:string[];
  cob1 : string[];
  cob2;
  cob3;
  ngOnInit() {

  }

  save(){
    this.datanotes.setJudulnote(this.judulnote);
    this.datanotes.setIsinote(this.isinote);
    this.datanotes.setTglnote(this.tglnote); 
    this.cob1= this.datanotes.getJudulnote();  
  }
}