import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NewsServiceService } from '../news-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router, RouterEvent } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { every } from 'rxjs';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent implements OnInit {

publisherAccess = false;

PublisherToggle($event: MatSlideToggleChange) {
  console.log("UT Toggler PP: ",  $event.checked)
  this.publisherAccess = $event.checked;
}

  isActive: boolean = true;
  LoginForm!: FormGroup;
  SigninForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>,
    private service: NewsServiceService,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    console.log('if worked')
    //can use formBilder where no need to write new FormControl
    this.LoginForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      }
    )
    console.log("else worked")
    this.SigninForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      }
    )
  }
  onClose() {
    console.log("modal close call")
    this.dialogRef.close();
    
  }
  active_login(val: boolean) {
    this.isActive = val;
  }
  loginResponse!: any;
  loginErrorNotification:boolean = false;
  LoginOnSubmit() {
    
    this.authService.LoginService(this.LoginForm.value.username,this.LoginForm.value.password).subscribe(
      (event) => {
        this.loginResponse = event
        if(this.loginResponse.status==401){
          this.loginErrorNotification = true
          console.log("Incorrect username")
        }
        else{  //login successful
          if(this.publisherAccess)
          {
            this.router.navigate(['newstartica/publisher'])
          }
          this.loginErrorNotification = false;
          this.onClose();
          this.service.updateToggleState(false);
          console.log("authenticated")
          //to push username in behaviour subject
          // also add it in LocalStorage
          this.service.addUserNameInObs(this.LoginForm.value.username) 
        }
        console.log("Unit Test: LoginSubmit(): ",this.loginResponse)
      }
    )
      // implement  logic for get api which will return token thus we will redicrect to main page.
  }
  LoginVerification(){
    this.LoginOnSubmit();
    if(this.loginResponse.status==401){
      console.log("Incorrect username")
    }
    else{
      console.log("authenticated")
    }
  }

  SigninSubmit()
  {
    if (this.SigninForm.valid) {

      console.log(this.SigninForm.value)
    }
    else {
      console.log(this.SigninForm.errors)
    }
    // implement logic for post api to drf
    //upon successfull addition we will add a notification bar of green color to give confirmation.
  }

}
