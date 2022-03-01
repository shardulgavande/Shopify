import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private base_url = "http://localhost:53176";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient:HttpClient) { }

  getOrders(id:number): Observable<any> {
    return this.httpClient.get(`${this.base_url+"/api/orders"}${id}`);
  }

  create(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/api/orders",data,this.http_option);
  }

  createItem(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/api/orderitem",data,this.http_option);
  }
  createPayment(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/api/payment",data,this.http_option);
  }
}
