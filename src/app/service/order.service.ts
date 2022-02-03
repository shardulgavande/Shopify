import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private base_url = "http://localhost:3000";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient:HttpClient) { }

  createItem(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/app/orders/items/add",data,this.http_option);
  }
}
