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
CategoryList: any;

      
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
      page: number = 0;   // since we are fetching all the items, page number will be 0
      ngOnInit(): void{       // fetching news from api using service object
          this.service.topHeading(this.page).subscribe((result)=>{
            console.log("Test New News API",result);
            this.news_items = result;   
            console.log(this.news_items) 
            
          this.service.topNewsHeading().subscribe((sports_result)=>{
            console.log(sports_result);
            this.sports_news = sports_result;
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
          this.s_article = article;
          this.snug = article.title;
          this.mouseClick = true;
          this.scrollToTop(); 

        }

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
        // this.router.navigate(['newstartica/news', this.snug]);  //when we are going to /news then we should only show that news
        console.log(article.content);   
      }

      private scrollToTop(): void {
        if (this.newsContainer && this.newsContainer.nativeElement) {
          this.newsContainer.nativeElement.scrollTop = 0;
        }
      }
      
      //HANDLE SEARCH FUNCTIONALITY
      search_string:string = '';
      getSearchValue(event:any) {
        this.search_string = event.target.value 
        console.log("Log Search Feature: ",this.search_string)
        }

      //LOGIC FOR CORRECTING IMAGE URL BECAUSE ANGULAR WAS CONSIDERING ITS OWN HOST RATHER THAN  DJANGO HOST
      getImageURL(arg0: any) {
        console.log("http://127.0.0.1:8000/"+arg0)
          return "http://127.0.0.1:8000/"+arg0
        }
}
