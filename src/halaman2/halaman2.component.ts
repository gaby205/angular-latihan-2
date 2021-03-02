import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {

  constructor(private router : ActivatedRoute, public datanotes : GlobalvarService)
  {
    this.judulnote = this.datanotes.getJudulnote();
    this.isinote = this.datanotes.getIsinote();
    this.tglnote = this.datanotes.getTglnote();
  }

  judulnote;
  isinote;
  tglnote;

  ngOnInit() {
  }

}