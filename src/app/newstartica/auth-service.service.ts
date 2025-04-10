import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthServiceService {
  //ALL VARIABLES DEFINED BELOW
  loginURL = "http://127.0.0.1:8001/api/login/"
  registerURL = "";

  constructor(private httpClient: HttpClient) { }

  //LOGIN SERVICE
  
  LoginService(username: any, password: any): Observable<any> {
    return this.httpClient.post(this.loginURL, {
      username: username,
      password: password
    },
      {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      })
  }

  //REGISTRATION SERVICE
  RegistrationService(username:any,email:any, password: any){
        this.httpClient.post(
          this.registerURL,
          {
            username:username,
            email:email,
            password:password
          },
          {
            headers: new HttpHeaders({'content-type':'application/json'})
          }
        ).subscribe(
          (response)=>{
            console.log("Unit Test: RegistrationService: ",response)
          }
        )
  }

}
