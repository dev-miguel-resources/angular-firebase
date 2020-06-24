import { NgModule } from '@angular/core';
import {PostComponent} from './../../posts/post/post.component';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { MaterialModule } from '../../../material.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent, PostComponent],
    imports: [CommonModule, HomeRoutingModule, MaterialModule]
})

export class HomeModule {}