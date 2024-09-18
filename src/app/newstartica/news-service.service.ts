import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  newsURL = "http://127.0.0.1:8000/api/v1/news";
  sportsURL = "http://127.0.0.1:8000/api/v1/news?category=sports";//passing params
  // newsURL = 'https://newsapi.in/newsapi/news.php?key=jSg8I2x8EV094hfDvhCktS4vh5y8d5&category=hindi_state&content_type=full_content'

  
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
    console.log("http://127.0.0.1:8000/"+arg0)
      return "http://127.0.0.1:8000/"+arg0
    }
}
