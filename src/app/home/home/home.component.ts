import { Component, OnInit } from '@angular/core';
import { data } from '../../../data/MOCK_DATA'
import { User } from '../../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = data;
  constructor() { }

  ngOnInit(): void {
  }

}
