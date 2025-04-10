import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CategoryNewsComponent } from './category-news/category-news.component';
import { CollapsableNavbarComponent } from './collapsable-navbar/collapsable-navbar.component';
import { PublisherDashboardComponent } from './publisher-dashboard/publisher-dashboard.component';

const routes: Routes = [
  {
    path: 'newstartica',
    component: ContainerComponent,
    children: [
      {
         path: '', 
         component: MainContentComponent }, // Default route
      // { path: ':category', component: CategoryNewsComponent },
      {
        path:'news',
        component: MainContentComponent},
      {
        path:'category/:category',
        component: CategoryNewsComponent},

      {
        path: 'news/:snug',
        component: MainContentComponent},

      {
        path:'sidenavtest',
        component:CollapsableNavbarComponent}
      

      // {path: 'news/',component:individualNews}
      // {path:':category',component: CategoriesComponent},
    ]
  },
  {
    path:'newstartica/publisher',
    component:PublisherDashboardComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewstarticaRoutingModule { }
