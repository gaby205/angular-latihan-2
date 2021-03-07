import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman1',
  templateUrl: './halaman1.component.html',
  styleUrls: ['./halaman1.component.css']
})
export class Halaman1Component implements OnInit {

  constructor(private router: Router, private acrouter : ActivatedRoute, public datanotes : GlobalvarService){}
  judulnote:string[] = this.datanotes.getJudulnote();
  count; 

  ngOnInit() {

  }

  judul;
  isi;
  tgl;
 
  viewdetail(index) {
    this.router.navigate(["/halaman2/" + index]);
  }
  

  save(judulnote,isinote,tglnote){
    this.count = this.datanotes.getCounter();
    this.datanotes.AddNewNote(judulnote,isinote,tglnote);
  }
}