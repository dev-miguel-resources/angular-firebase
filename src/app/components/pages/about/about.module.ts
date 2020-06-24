import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from './about-routing.module';
import { MaterialModule } from '../../../material.module';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, AboutRoutingModule, MaterialModule]
})

export class AboutModule {}