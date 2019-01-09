import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ApiBaseUrl} from './services/apiBaseUrl.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AlertService} from './services/alert.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PostBarComponent } from './post-bar/post-bar.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostCardComponent } from './post-card/post-card.component';
import {ReversePipe} from './pipes/invert.pipe';
import { ColorDirective } from './color.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    UserProfileComponent,
    SidenavComponent,
    SearchBarComponent,
    TopNavComponent,
    PostBarComponent,
    AddPostComponent,
    PostCardComponent,
    ReversePipe,
    ColorDirective  // pipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatSidenavModule,
    MatTooltipModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule    // routing module
  ],
  entryComponents: [AddPostComponent],
  providers: [ApiBaseUrl, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
