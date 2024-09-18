import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent {


  category : any
  mouseClick: boolean = true;
  s_article: any;
  snug: any;
  news_items: any;   // TO GET ALL NEWS ARTICLES

  //TO HANDLE PAGINATION
  page: number = 1;  
  current_page: number = 1;


  constructor(private route: ActivatedRoute,
     private router: Router,
    private service: NewsServiceService){

  }
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.category =  params.get('category');
      
      console.log(this.category);
    });

    //can pass category as an argument if we need to filter based on category

    this.service.topHeading(this.page).subscribe((result)=>{
      console.log("Test New News API",result);
      this.news_items = result;   
      console.log(this.news_items) 
    });
    // this.post_page_no(1);
  }
  hideArticle(): void{
          
    this.s_article=null;
    this.mouseClick=false;          
  
  
}
// #use case of snug 
clickedArticle(event:Event, article:any): void{
  event.preventDefault();
  this.showArticle(article);
  this.snug = article.title;
  this.router.navigate(['newstartica/news', this.snug]);  //when we are going to /news then we should only show that news
  console.log(article.content);   
}
showArticle(article: any) {
  throw new Error('Method not implemented.');
}
  //fetching api based on page 
  post_page_no(page:number){
    this.current_page = page
    console.log(page,"parameter page"),
    console.log(this.page,"variable page")
    console.log(this.current_page,"variable current page")
    
    this.service.topHeading(page).subscribe((result)=>{
      console.log("Test New News API",result);
      this.news_items = result;   
      console.log(this.news_items) 
    })
    
    this.current_page = page
  }

  //Logic for Next button clicked (should take you to next page)
  NextClicked(page: number) {
    if (this.current_page==this.page+2){
      this.page+=1;
    }
    this.current_page +=1;
        this.post_page_no(this.current_page);
    }

  //logic for active color for current page
  pageActive(arg0: number): any {
    if (this.current_page==arg0){
      return true
    }
    return false
  }
  getImageURL(url: any){
    return this.service.getImageURL(url)
  }
  
}
