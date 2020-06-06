import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS, RUTAS Y OTROS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import {NewPostModule} from './components/posts/new-post/new-post.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import {EditPostModule} from './components/posts/edit-post/edit-post.module';


// Firebase
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ToolbarComponent,
    ContainerAppComponent,
    DetailsPostComponent,
    EditPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule,
    EditPostModule
  ],
  entryComponents: [ModalComponent],
  providers: [
    {provide: StorageBucket, useValue: 'gs://angular-firebase-advanced.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
