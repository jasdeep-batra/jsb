import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './newstartica/container/container.component';
import { CategoryNewsComponent } from './newstartica/category-news/category-news.component';
import { Collector1Component } from './front-page/collector1/collector1.component';
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
