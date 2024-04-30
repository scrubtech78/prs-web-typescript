import { Injectable } from "@angular/core";
import { User } from "../model/user";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { UserLogin } from "../model/userLogin";

const URL: string = 'http://localhost:8080/api/users';

@Injectable({
    providedIn: 'root',
  })
  export class UserService{
    constructor(private http: HttpClient){}
  
  getAllUser(): Observable<User[]>{
    return this.http.get(URL+ "/" ) as Observable<User[]>;
}

getUserById(id: number):Observable<User>{
  return this.http.get(URL +'/'+ id) as Observable<User>;}

createUser(user: User):Observable<User>{
     return this.http.post(URL,user) as Observable<User>
 }

 updateUser(user:User):Observable<User> {
  return this.http.put(URL+"/" + user.id, user) as Observable<User>;
}

 deleteUser(id:number): Observable<boolean> {
  return this.http.delete(URL+'/'+id) as Observable<boolean>;}

  login(userLogin: UserLogin): Observable<User>{
    return this.http.post(URL + '/login', userLogin) as Observable<User>;
 }
   
 }