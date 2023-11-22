import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SocialMediaBoxComponent } from './social-media-box/social-media-box.component';
import { BlogHomePageComponent } from './blog-home-page/blog-home-page.component';
import { NewsHomePageComponent } from './news-home-page/news-home-page.component';
import { Collector1Component } from './collector1/collector1.component';
import { FrontPageRoutingModule } from './front-page-routing.module';

@NgModule({
  declarations: [CarouselComponent,
    IntroductionComponent,
    SocialMediaBoxComponent,
    BlogHomePageComponent,
    NewsHomePageComponent,
    Collector1Component],
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  exports:[
    CarouselComponent,
    IntroductionComponent,
    SocialMediaBoxComponent,
    BlogHomePageComponent,
    NewsHomePageComponent,
    Collector1Component
  ]
})
export class FrontPageModule { }
