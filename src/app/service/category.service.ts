import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private base_url = "http://localhost:53176";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient:HttpClient) { }

  /* getProducts():Observable<IProducts []>{
    return this.httpClient.get<IProducts[]>(this.base_url+"/app/products");
  } */
  getCategory():Observable<any>{
    return this.httpClient.get(this.base_url+"/api/category");
  }

  /*create(data:IProducts): Observable<IProducts>{
      return this.httpClient.post<IProducts>(this.base_url+"/app/products/add",data,this.http_option);
  } */
  create(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/api/category",data,this.http_option);
  }

  get(id:number): Observable<any> {
    return this.httpClient.get(`${this.base_url+"/api/category/"}${id}`);
  }

  update(id:number,data:any):Observable<any>{
    return this.httpClient.put(`${this.base_url+"/api/category/update/"}${id}`,data);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete(`${this.base_url+"/api/category/delete/"}${id}`);
  }
}
