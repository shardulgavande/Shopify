import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorytypeService {

  private base_url = "http://localhost:53176";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient:HttpClient) { }

getCategoryTypes():Observable<any>{
    return this.httpClient.get(this.base_url+"/api/categorytype");
  }

  /*create(data:IProducts): Observable<IProducts>{
      return this.httpClient.post<IProducts>(this.base_url+"/app/products/add",data,this.http_option);
  } */
  create(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/api/categorytype",data,this.http_option);
  }

  get(id:number): Observable<any> {
    return this.httpClient.get(`${this.base_url+"/app/categorytypes/"}${id}`);
  }

  update(id:number,data:any):Observable<any>{
    return this.httpClient.put(`${this.base_url+"/app/categorytypes/update/"}${id}`,data);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete(`${this.base_url+"/app/categorytypes/delete/"}${id}`);
  }
}


