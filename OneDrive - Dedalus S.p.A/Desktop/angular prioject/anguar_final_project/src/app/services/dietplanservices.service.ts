import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietplanservicesService {
  constructor(private http:HttpClient) { }
  getDetails(id:number):Observable<any> {
    return this.http.get("http://localhost:4500/details/"+id)
  }

  getDiet():Observable<any> {
    return this.http.get("http://localhost:4500/details")
  }


}
