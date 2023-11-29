import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPost().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {
    this.posts = this.postSrv.getPosts();
  }

  getPostClass(postType: string): string {
    switch (postType) {
      case 'news':
        return 'bg-warning';
      case 'politic':
        return 'bg-dark text-white';
      case 'education':
        return 'bg-primary text-white';
      default:
        return '';
    }
  }

  toggle(post: any): void {
    post.active = true;
  }
}
