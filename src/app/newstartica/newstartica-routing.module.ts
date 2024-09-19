import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CategoryNewsComponent } from './category-news/category-news.component';
import { CollapsableNavbarComponent } from './collapsable-navbar/collapsable-navbar.component';

const routes: Routes = [
  {
    path: 'newstartica',
    component: ContainerComponent,
    children: [
      { path: '', component: MainContentComponent }, // Default route
      // { path: ':category', component: CategoryNewsComponent },
      {path:'news',component: MainContentComponent},
      {path:':category',component: CategoryNewsComponent},

      {path: 'news/:snug',component: MainContentComponent},

      {path:'test/sidenavtest',component:CollapsableNavbarComponent}

      // {path: 'news/',component:individualNews}
      // {path:':category',component: CategoriesComponent},
    ]
  }
  // {
  //   path: 'news',
  //   component: ContainerComponent,
  //   children: [
  //     {path:'home',component: ContainerComponent},
  //     {path:':category',component: CategoryNewsComponent}
  //   ]
  // }
  // Other routes
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewstarticaRoutingModule { }
