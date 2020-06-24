import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PostService } from '../post/post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../../shared/models/post.interface';

@Component({
  selector: 'app-detail-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {

  public post$: Observable<PostI>;

  constructor(private postSvc: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    const idPost = this.route.snapshot.params.id; // el params solito te devuelve un observable. El del snapshot te devuelve un objeto con el parametro a capturar
    this.post$ = this.postSvc.getOnePost(idPost);
  }

}
