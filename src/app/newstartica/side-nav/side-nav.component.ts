import {Component,EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  // @Output() name = new EventEmitter<boolean>();
  // @Input() name2 : string = "jasdeep";
  isOpen: boolean = true;
  width: string = "170px";
  toggleCollapse() {
    
    this.isOpen = !this.isOpen;
    console.log("worked");
    console.log(this.isOpen);
    if(this.isOpen==false)
    {
      this.width = "0px";
    }
  }
}
