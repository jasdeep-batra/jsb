import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  newsURL = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=72f4f1ff399e476b884d30f7d4345cd8";
  sportsURL = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72f4f1ff399e476b884d30f7d4345cd8"
  
  topHeading():Observable<any>
  {
    return this.http.get(this.newsURL);
  }
  topNewsHeading():Observable<any>
  {
    return this.http.get(this.sportsURL);
  }
}
