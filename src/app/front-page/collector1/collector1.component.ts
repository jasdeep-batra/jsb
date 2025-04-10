import { Component } from '@angular/core';
import { NewsServiceService } from 'src/app/newstartica/news-service.service';

@Component({
  selector: 'app-collector1',
  templateUrl: './collector1.component.html',
  styleUrls: ['./collector1.component.css']
})
export class Collector1Component {
  constructor(private service: NewsServiceService)
  {

  }
}
