import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post/post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }

}
