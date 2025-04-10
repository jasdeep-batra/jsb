import { Component } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  subscription!: Subscription;

  constructor(private service: NewsServiceService, 
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog){

  }

  ngOnInit(): void{ 
    this.subscription = this.service.currentToggleState.subscribe((togglestate)=>{
      if (togglestate==true)
      {
        console.log("UT: togglestate: ",togglestate)      
        this.OpenDialogue()  //without including material css in styles.css it won't work.
      }
    })
  }
  // ngOnDestroy() {
  //   // Unsubscribe when the component is destroyed
  //   if (this.subscription) {
  //     console.log("subscription cancled")
  //     this.subscription.unsubscribe();
  //   }
  // }
  OpenDialogue(){
    //   const dialogConfig = new MatDialogConfig();
  
    // dialogConfig.position = { top: '50%', left: '50%' };
    // dialogConfig.panelClass = 'custom-dialog-container'; // 
      this.dialog.open(LoginModalComponent,{
        width: '600px',
        height: '400px',
        panelClass: 'custom-dialog-container'
      })
    }
}
