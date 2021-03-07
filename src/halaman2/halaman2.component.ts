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
    // this.judulnote = this.datanotes.getJudulnote();
    // this.isinote = this.datanotes.getIsinote();
    // this.tglnote = this.datanotes.getTglnote();
  }
  judulnote;
  isinote;
  tglnote;
  paramIn;
  favnote = this.datanotes.getFavs();
  favstate;
  judul;
  isi;
  tgl;
  i;
  

  favorite(i)
  {
    this.favstate = this.datanotes.getFav(i);
    if (this.favstate == false)
    {
      this.favstate = true;
      this.datanotes.setFav(i,this.favstate);
    }
    else
    {
      this.favstate = false;
      this.datanotes.setFav(i,this.favstate);
    }
  }

  ngOnInit() {
    this.paramIn = this.router.snapshot.paramMap.get("index");
    this.judul = this.datanotes.getJudulnotes(this.paramIn);
    this.isi = this.datanotes.getIsinotes(this.paramIn);
    this.tgl = this.datanotes.getTglnotes(this.paramIn);
  }

}