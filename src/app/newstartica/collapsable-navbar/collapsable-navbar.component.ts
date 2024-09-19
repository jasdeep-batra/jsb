import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsable-navbar',
  templateUrl: './collapsable-navbar.component.html',
  styleUrls: ['./collapsable-navbar.component.css']
})
export class CollapsableNavbarComponent {


pressed: boolean = false;
isActive: boolean = false;
search_string:string = '';
categories:string[] = ["Sports","Finance","Politics","Glamor","Movies","Space","Technology","Share Market","Crypto","Science","Literature","Festival","category1","category2","category3"]

sorted_categories:string[] = this.categories.sort()
OnInit():void{
}

buttonActivate() {
  if(!this.isActive){
    this.isActive = true
  }
  else{
    this.isActive = false
  }
}

//HANDLE SEARCH FUNCTIONALITY

getSearchValue(event:any) {
  this.search_string = event.target.value 
  console.log("Log Search Feature: ",this.search_string)
  }

  reduceisland() {
    if (this.pressed==false){
       this.pressed = true;
    }
    this.pressed = false;
    console.log("dynamic insladn");
    }

}
