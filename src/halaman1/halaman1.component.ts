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
  
  ngOnInit() {

  }

  save(judulnote,isinote,tglnote){
    this.count = this.datanotes.getCounter();
    this.datanotes.AddNewNote(judulnote,isinote,tglnote);
  }
}