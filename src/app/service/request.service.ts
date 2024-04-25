import { Injectable } from "@angular/core";
import { Request} from "../model/request";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
const URL: string = 'http://localhost:8080/api/requests';

@Injectable({
    providedIn: 'root',
  })
  export class RequestService{
    constructor(private http: HttpClient){}
  
  getAllRequest(): Observable<Request[]>{
    return this.http.get(URL+ "/" ) as Observable<Request[]>;
}

getRequestById(id: number):Observable<Request>{
  return this.http.get(URL +'/'+id) as Observable<Request>;}

createRequest(request: Request):Observable<Request>{
     return this.http.post(URL,request) as Observable<Request>
 }

 updateRequest(request:Request):Observable<Request> {
  return this.http.put(URL+"/" + request.id, request) as Observable<Request>;
}

 deleteRequest(id:number): Observable<boolean> {
  return this.http.delete(URL+'/'+id) as Observable<boolean>;}
  addRequest(request: Request):Observable<Request>{
    return this.http.post(URL, Request ) as Observable<Request>;
  }
  reviewRequest(id:number): Observable<Request>{
    return this.http.post(URL+"/review/"+ id, null) as Observable<Request>;
  }
  getAllRequestsInReview(userId: number):Observable<Request[]>{
    return this.http.get(URL+"/reviews/" + userId ) as Observable<Request[]>;
 }
 approveRequest(id: number):Observable<Request>{
  return this.http.post(URL+"/approve/"+ id, null ) as Observable<Request>;
}
  rejectRequest(id: number):Observable<Request>{
    return this.http.post(URL+"/reject/"+ id, null) as Observable<Request>;
  }
  }