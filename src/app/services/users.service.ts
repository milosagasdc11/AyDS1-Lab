import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url ='https://jsonplaceholder.typicode.com/users' //url de la api


  constructor(private http:HttpClient) {
    console.log('Servicio Persona')
   }

   getUsers(){
     let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
        headers:header
      })
   }


}
