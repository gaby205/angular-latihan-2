import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private judulnote = [];
  private isinote = [];
  private tglnote = [];
  private fav = [];
  private counter = 0;
  constructor() {}

  public getJudulnote(){
    return this.judulnote;
  }
  public getIsinote(){
    return this.isinote;
  }
  public getTglnote(){
    return this.tglnote;
  }

  public getCounter(){
    return this.counter;
  }

  public setJudulnote(x, judul){
    this.judulnote[x] = judul;
  }

  public setIsinote(x , isi){
    this.isinote[x] = isi;
  }

  public setTglnote(x , tgl){
    this.tglnote[x] = tgl;
  }

  public setFav(x,state : boolean){
    this.fav[x] = state;
  }

  public AddNewNote(judul,isi,tgl) {
    this.judulnote.push(judul);
    this.isinote.push(isi);
    this.tglnote.push(tgl);
    this.fav.push(false);
    this.counter++;
  }
}