import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class WebAppService {
  url="http://localhost:3000/Product"
  constructor( private http:HttpClient ) { }

getList(){
  return this.http.get(this.url)
}
saveWebApp(data:any){
  return this.http.post(this.url , data)
}
getUpdateById(id:number){
  return this.http.get(`${this.url }/ ${id}`);
  }
  updateWebData(id:any , data:any){
return this.http.put(`${this.url}/${id}`, data)
  }
}
