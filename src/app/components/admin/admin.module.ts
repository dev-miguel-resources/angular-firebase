import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../../material.module';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, AdminRoutingModule, MaterialModule]
})

export class AdminModule { }