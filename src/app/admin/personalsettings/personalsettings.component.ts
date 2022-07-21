import { Component, OnInit } from '@angular/core';
import { suppliers } from 'src/data/mock_data_supplier';

@Component({
  selector: 'app-personalsettings',
  templateUrl: './personalsettings.component.html',
  styleUrls: ['./personalsettings.component.scss']
})
export class PersonalsettingsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'storeName', 'type', 'address'];
  dataSource = suppliers;
  constructor() { }

  ngOnInit(): void {
  }

}
