import { Component } from '@angular/core';

@Component({
  selector: 'app-publisher-dashboard',
  templateUrl: './publisher-dashboard.component.html',
  styleUrls: ['./publisher-dashboard.component.css']
})
export class PublisherDashboardComponent {

nav_list: string[] = ['Post Article','View Articles','Analytics','Edit Articles'];
selected_button: number | null = 0;

ToggleColor(ind:number) {
    this.selected_button = this.selected_button===ind? null : ind;
  }



}
