import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaestroModel } from '../HomeComponent/home.component';


@Injectable({
  providedIn: 'root'
})
export class HomeaService {

  Url = 'https://poetrydb.org/'
  constructor(private http: HttpClient) { }


  async getAutores(){
    let api = await fetch(this.Url+'author');
    return api.json()
  }

  async getAutoresByName(name : string){
    let api = await fetch(this.Url+`author/${name}/title`);
    return api.json()
  }

  async getObrasByName(name : string){
    let api = await fetch(this.Url+`title/${name}`);
    return api.json()
  }
}