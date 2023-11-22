import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { FrontPageModule } from './front-page/front-page.module';
import { NewstarticaModule } from './newstartica/newstartica.module';
import { NewsServiceService } from './newstartica/news-service.service';

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
    NewstarticaModule

  ],
  exports:[NavigationComponent],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
