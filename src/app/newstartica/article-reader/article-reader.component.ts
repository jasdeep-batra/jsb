import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-article-reader',
  templateUrl: './article-reader.component.html',
  styleUrls: ['./article-reader.component.css']
})
export class ArticleReaderComponent {
    constructor(
      //injection token works as an provider of a service thus we are getting a json as a response 
      @Inject(MAT_DIALOG_DATA) public newsData: {
        title: string;
        content: string;
        image: string;
      },
      private service: NewsServiceService
    )
    {

    }

    getImageURL(url: any){
      return this.service.getImageURL(url)
    }
}
