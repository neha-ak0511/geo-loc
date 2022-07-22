import { Component, OnInit } from '@angular/core';
import { suppliers } from 'src/data/mock_data_supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  loader = true;
  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.displayedColumns = ['id', 'storeName', 'type', 'address'];
      this.dataSource = suppliers;
      this.loader = false;
    }, 1000);
  }

}
