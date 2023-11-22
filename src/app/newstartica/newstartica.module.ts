import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewstarticaRoutingModule } from './newstartica-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NewsServiceService } from './news-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryNewsComponent } from './category-news/category-news.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent,
    SideNavComponent,
    CategoriesComponent,
    MainContentComponent,
    CategoryNewsComponent
  ],
  imports: [
    CommonModule,
    NewstarticaRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    CategoryNewsComponent
  ],
  providers: [NewsServiceService]
})
export class NewstarticaModule { }
