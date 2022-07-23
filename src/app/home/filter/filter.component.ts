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
  ratings = [
    "4★ & above",
    "3★ & above",
    "2★ & above",
    "1★ & above",
  ]
  priceRanges = [
    "Under ₹500",
    "₹500 - ₹1,000",
    "₹1,000 - ₹2,000",
    "₹2,000 - ₹3,000",
    "Over ₹3,000"
  ]


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
