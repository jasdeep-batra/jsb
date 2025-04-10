import { Component,OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    // to write a logic such that we will receive token on successfull login..and the name will appear instead of sign in 
    log_in: string = "Sign In"

    constructor(private service: NewsServiceService)
    {

    }

    ngOnInit():void{
      this.service.datafromModal_obs.subscribe(
        event=>{
          //We have to add this on the basis of token if token in session then change the name.
          if(event!="Sign In"){
            this.log_in = "Hello, "+ event
            console.log("Unit Test Header Name: ",this.log_in)
          }
        }
      )
    }

    modalToggle() {
      //putting data in behaviour subject
      this.service.updateToggleState(true);
      console.log("value pushed in Modal-BehaviourSubject")
    }

    //How name logic will gonna work
    //  1. if token in localsotrage
    //  2. get value from observer

}
