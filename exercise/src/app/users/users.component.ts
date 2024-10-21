import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = [
    { name: 'Federico Peralta' },
    { name: 'Tammaro Miele' },
    { name: 'Andrea La Ventura' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
