import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private judulnote: string;
  private isinote: string;
  private tglnote: string;
  constructor() {
    this.judulnote = "";
    this.isinote = "";
    this.tglnote = "";
   }

  public getJudulnote(){
    return this.judulnote;
  }
  public getIsinote(){
    return this.isinote;
  }
  public getTglnote(){
    return this.tglnote;
  }

  public setJudulnote(judul:string){
    this.judulnote = judul;
  }

  public setIsinote(isi:string){
    this.isinote = isi;
  }

  public setTglnote(tgl:string){
    this.tglnote = tgl;
  }

}