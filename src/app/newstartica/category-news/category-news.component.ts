import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent {
  category : any
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.category = params.get('category');
      console.log(this.category);
    })
  }
  

}
