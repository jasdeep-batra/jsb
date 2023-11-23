import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  newsURL = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=72f4f1ff399e476b884d30f7d4345cd8";
  sportsURL = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72f4f1ff399e476b884d30f7d4345cd8"
  // newsURL = 'https://newsapi.in/newsapi/news.php?key=jSg8I2x8EV094hfDvhCktS4vh5y8d5&category=hindi_state&content_type=full_content'


  private apiUrl = 'https://newsapi.in/api/v2'; // Base URL for NewsAPI

  private apiKey = 'jSg8I2x8EV094hfDvhCktS4vh5y8d5'; // Your API key
  
  topHeading():Observable<any>
  {
    return this.http.get(this.newsURL);
  }
  topNewsHeading():Observable<any>
  {
    return this.http.get(this.sportsURL);
  }
}
