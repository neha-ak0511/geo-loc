import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  panelOpenState = false;
  filterGroups = ["Categories", "Price", "Brand", "Customer ratings"]
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  @Input() brands: any;
  @Input() categories: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
