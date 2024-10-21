import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = [
    { title: 'My first post' },
    { title: 'Another interesting post' },
    { title: 'Angular Tips & Tricks' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
