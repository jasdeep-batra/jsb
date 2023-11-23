import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

      mouseClick: Boolean = false;
      send_message: any =  "Click on the title of the News to read the article;";

      @ViewChild('newsContainer',{static:false}) newsContainer!: ElementRef;

      
      constructor(private service: NewsServiceService, 
        private sanitizer: DomSanitizer, 
        private route: ActivatedRoute,
        private router: Router){

      }

      getSanitizedContent(article: any): SafeHtml{
        return this.sanitizer.bypassSecurityTrustHtml(article.content);
      }

      news_items: any = [];  // list to store news objects 
      sports_news: any = [];
      snug: any;

      ngOnInit(): void{       // fetching news from api using service object
          this.service.topHeading().subscribe((result)=>{
            console.log("pp",result);
            this.news_items = result.articles;    
            
          this.service.topNewsHeading().subscribe((sports_result)=>{
            console.log(sports_result);
            this.sports_news = sports_result.articles;
          })
          })
          
          // this.route.paramMap.subscribe(params=>{
          //   this.snug = params.get('snug');
          //   console.log("snug below");
          //   console.log(this.snug);
          // })

      }
      s_article: any;
      showArticle(article:any): void{
        if(this.s_article===article){
          this.snug =null;
          this.hideArticle();
        }
        else{
          this.snug = article.title;
          this.s_article = article;
          this.mouseClick = true;
          this.scrollToTop(); 

        }

      }

      hideArticle(): void{
          
          this.s_article=null;
          this.mouseClick=false;          
        
        
      }

      clickedArticle(event:Event, article:any): void{
        event.preventDefault();
        this.showArticle(article);
        this.snug = article.title;
        this.router.navigate(['newstartica/news', this.snug]);
        console.log(article.content);   
      }

      private scrollToTop(): void {
        if (this.newsContainer && this.newsContainer.nativeElement) {
          this.newsContainer.nativeElement.scrollTop = 0;
        }
      }
      
}
