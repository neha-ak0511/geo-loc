import { Component, OnInit } from '@angular/core';
import { data } from 'src/data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = data;
  constructor() { }

  ngOnInit(): void {
  }

}
