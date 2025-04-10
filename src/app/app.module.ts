import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { FrontPageModule } from './front-page/front-page.module';
import { NewstarticaModule } from './newstartica/newstartica.module';
import { NewsServiceService } from './newstartica/news-service.service';
import { MatDialogModule } from '@angular/material/dialog'; 
import { LoginModalComponent } from './newstartica/login-modal/login-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProfileModule,
    FrontPageModule,
    NewstarticaModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    

  ],
  exports:[NavigationComponent],
  providers: [NewsServiceService],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent]
})
export class AppModule { }
