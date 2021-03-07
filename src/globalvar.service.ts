import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private judulnote = [];
  private isinote = [];
  private tglnote = [];
  private fav : boolean[] = [];
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

  public getJudulnotes(x){
    return this.judulnote[x];
  }
  public getIsinotes(x){
    return this.isinote[x];
  }
  public getTglnotes(x){
    return this.tglnote[x];
  }

  public getFav(x){
    return this.fav[x];
  }

  public getFavs(){
    return this.fav;
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