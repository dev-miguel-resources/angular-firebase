import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public appName = 'ngPost';

  constructor(public authSvc: AuthService ) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.authSvc.logout();
  }

}
