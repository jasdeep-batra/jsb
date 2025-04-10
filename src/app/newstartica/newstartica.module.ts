import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewstarticaRoutingModule } from './newstartica-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NewsServiceService } from './news-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryNewsComponent } from './category-news/category-news.component';
import { CollapsableNavbarComponent } from './collapsable-navbar/collapsable-navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './auth-service.service';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { FooterComponent } from './footer/footer.component';
import { PublisherDashboardComponent } from './publisher-dashboard/publisher-dashboard.component';
import { PublisherPostUploadFormComponent } from './publisher-post-upload-form/publisher-post-upload-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent,
    SideNavComponent,
    MainContentComponent,
    CategoryNewsComponent,
    CollapsableNavbarComponent,
    LoginModalComponent,
    ArticleReaderComponent,
    FooterComponent,
    PublisherDashboardComponent,
    PublisherPostUploadFormComponent,
    
  ],
  imports: [
    CommonModule,
    NewstarticaRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    CategoryNewsComponent
  ],
  providers: [NewsServiceService,AuthServiceService]
})
export class NewstarticaModule { }
