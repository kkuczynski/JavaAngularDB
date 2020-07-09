import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PetsComponent } from './pets/pets.component';
import { AHComponent } from './ah/ah.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    PetsComponent,
    AHComponent,
    LeftMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
