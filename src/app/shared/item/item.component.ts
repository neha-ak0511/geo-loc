import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data : any;

  constructor() { }

  ngOnInit(): void {
  }
  getName(name: string) {
    return name.length <=10 ? name.substring(0, 40) : name.substring(0, 40) + '...';
  }

}
