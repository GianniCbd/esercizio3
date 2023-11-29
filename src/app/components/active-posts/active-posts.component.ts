import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: Post[] = [];

  inactivePosts: Post[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPost().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
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
        return 'text-bg-dark';
      case 'education':
        return 'bg-primary text-white';
      default:
        return '';
    }
  }

  toggle(post: any): void {
    post.active = !post.active;
  }
}
