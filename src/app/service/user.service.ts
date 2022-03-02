import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 //http://localhost:3000/users/
 private user_urls = "http://localhost:53176/api/user";
 private user_login = "http://localhost:53176/api/user/login";
 private user_find = "http://localhost:3000/app/users";
//  private user_reg = "http://localhost:3000/app/users/reg";
 private user_add = "http://localhost:53176/api/user";
//  private user_update = "http://localhost:3000/app/users/update/";
 private user_update = "http://localhost:53176/api/user";
 private user_delete = "http://localhost:3000/app/users/delete/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getUsers():Observable<IUser[]>{
   return this.httpclient.get<IUser[]>(this.user_urls);
 };

 find(id:number): Observable<IUser> {
  return this.httpclient.get<IUser>(this.user_find+"/"+id);
}
// register(user:any){
//   return this.httpclient.get<IUser>(this.user_find+"/",user);
// }


 create(users: any): Observable<IUser> {
  return this.httpclient.post<IUser>(this.user_add, JSON.stringify(users), this.httpOptions);
}

 login(users:any): Observable <IUser>{
   return this.httpclient.post<IUser>(this.user_login, JSON.stringify(users), this.httpOptions);
 }


// update(id:number, users: any): Observable<IUser> {
//   return this.httpclient.put<IUser>(this.user_update + id, JSON.stringify(users), this.httpOptions)
// }

update(data:any):Observable<any>{
  return this.httpclient.put<IUser>(this.user_update,data);
}

// update(id:number,data:any):Observable<any>{
//   return this.httpclient.put<IUser>(`${this.user_update}${id}`,data);
// }

delete(id:number){
  return this.httpclient.delete<IUser>(this.user_delete + id, this.httpOptions)
}


}
