import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: any[] = [];
  constructor() {
    this.recuperaPost().then((data) => {
      this.posts = data.posts;
    });
  }

  async recuperaPost() {
    return await (await fetch('../../assets/db.json')).json();
  }

  inviaPost(updatedPost: Post) {
    const index = this.posts.findIndex((post) => post.id === updatedPost.id);

    if (index !== -1) {
      this.posts[index] = updatedPost;
    } else {
      console.error('Post not found:', updatedPost);
    }
  }

  getPosts(): Post[] {
    return this.posts;
  }
}
