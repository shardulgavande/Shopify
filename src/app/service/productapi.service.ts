import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  private base_url = "http://localhost:3000";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<IProducts []>{
    return this.httpClient.get<IProducts[]>(this.base_url+"/products");
  }
}
