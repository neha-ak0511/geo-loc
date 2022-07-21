import { Component, OnInit } from '@angular/core';
import { suppliers } from 'src/data/mock_data_supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  displayedColumns: string[] = ['id', 'storeName', 'type', 'address'];
  dataSource = suppliers;

  constructor() { }

  ngOnInit(): void {
  }

}
