import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdmin } from '../IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //http://localhost:3000/admins/
 private admin_urls = "http://localhost:53176/api/admin";
 private admin_login = "http://localhost:53176/api/admin/login";
 private admin_find = "http://localhost:3000/app/admins";
 private admin_add = "http://localhost:53176/api/admin";
 private admin_update = "http://localhost:3000/app/admins/update/";
 private admin_delete = "http://localhost:3000/app/admins/delete/";

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private httpclient:HttpClient) { }


getAdmins():Observable<IAdmin[]>{
  return this.httpclient.get<IAdmin[]>(this.admin_urls);
};

find(id:number): Observable<IAdmin> {
 return this.httpclient.get<IAdmin>(this.admin_find+"/"+id);
}


create(admins: any): Observable<IAdmin> {
 return this.httpclient.post<IAdmin>(this.admin_add, JSON.stringify(admins), this.httpOptions);
}

login(admins:any): Observable <IAdmin>{
  return this.httpclient.post<IAdmin>(this.admin_login, JSON.stringify(admins), this.httpOptions);
}


update(id:number, admins: any): Observable<IAdmin> {
 return this.httpclient.put<IAdmin>(this.admin_update + id, JSON.stringify(admins), this.httpOptions)
}

delete(id:number){
 return this.httpclient.delete<IAdmin>(this.admin_delete + id, this.httpOptions)
}


}
