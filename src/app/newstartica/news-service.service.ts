import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  constructor(private http: HttpClient) { }

  newsURL = "http://127.0.0.1:8000/api/v1/news";
  sportsURL = "http://127.0.0.1:8000/api/v1/news?category=sports";//passing params
  loginURL = "http://127.0.0.1:8001/api/login/"

  //To add username in Observer -> show in header 
  private datafromModal = new BehaviorSubject<string>("Sign In");
  datafromModal_obs = this.datafromModal.asObservable();

  addUserNameInObs(username:string){
      this.datafromModal.next(username)
  }



  //to open modal on click
  private dataFromHeader = new BehaviorSubject<boolean>(false);
  currentToggleState = this.dataFromHeader.asObservable();

  updateToggleState(value:boolean)
  {
    this.dataFromHeader.next(value);
  }


  topHeading(page: number):Observable<any>
  {
    if (page==0){
      return this.http.get(this.newsURL);
    }
    const spage = page.toString()
    const pageNewsURL = `${this.newsURL}?page=${spage}`
    return this.http.get(pageNewsURL)
  }
  topNewsHeading():Observable<any>
  {
    return this.http.get(this.sportsURL);
  }

  //checking if same function can be used in all components
  getImageURL(arg0: any) {
    console.log( "Unit Test: Image URL: ","http://127.0.0.1:8000/"+arg0)
      return "http://127.0.0.1:8000/"+arg0
    }
}
