import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.component.html',
  styleUrls: ['./halaman3.component.css']
})
export class Halaman3Component implements OnInit {

  constructor(private router: Router, private acrouter : ActivatedRoute, public datanotes : GlobalvarService){}
  judulnote:string[] = this.datanotes.getJudulnote();
  favnote = this.datanotes.getFavs();

  viewdetail(index) {
    this.router.navigate(["/halaman2/" + index]);
  }
  ngOnInit() {
  }

}