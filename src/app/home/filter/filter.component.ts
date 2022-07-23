import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  panelOpenState = false;
  filterGroups = ["Categories", "Price", "Brand", "Customer ratings"]
  constructor() { }

  ngOnInit(): void {
  }

}
