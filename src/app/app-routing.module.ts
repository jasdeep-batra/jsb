import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './newstartica/container/container.component';
import { CategoryNewsComponent } from './newstartica/category-news/category-news.component';
const routes: Routes = [
  // { path: 'newstartica/news',component: ContainerComponent}
  // ,
  // {
  //   path: 'newstartica/news/:category',component: CategoryNewsComponent
  // }
  // {path:'profile', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
