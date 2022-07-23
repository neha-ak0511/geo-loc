import { Component, OnInit } from '@angular/core';
import { items } from '../../../data/items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = items.splice(0, 10);
  brands = items.splice(0, 5).map(x => x.brand)
  categories = [...new Set(items.splice(0, 5).map(x => x.category))];
  constructor() { }

  ngOnInit(): void {

  }

  

}
