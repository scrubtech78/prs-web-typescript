import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lineitem } from "../model/lineitem";
import { Observable } from "rxjs";
const  URL: string = 'http://localhost:8080/api/lineitems';
@Injectable({
    providedIn: 'root',
  })
  export class LineItemService{
    constructor(private http: HttpClient){}
    getLineItemById(id: number):Observable<Lineitem>{
      return this.http.get(URL+"/") as Observable<Lineitem>
    }
  
  addLineItem(lineitem: Lineitem):Observable<Lineitem>{
    return this.http.post(URL, lineitem) as Observable<Lineitem>
  }
 
  getAllLineitems(): Observable<Lineitem[]>{
    return this.http.get(URL+ "/" ) as Observable<Lineitem[]>;
  
}
  getLineitemsByRequestId(requestId: number): Observable<Lineitem[]>{
    return this.http.get(URL + "/by-request/"+requestId) as Observable<Lineitem[]>;
  }
  
  updateLineItem(lineitem: Lineitem): Observable<Lineitem>{
    return this.http.put(URL +"/" + lineitem.id, lineitem ) as Observable<Lineitem>
  }
  deleteLineItem(id: number): Observable<boolean>{
    return this.http.delete(URL + "/" + id) as Observable<boolean>
  }
} 