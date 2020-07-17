import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './views/users/users.component';
import { PetsComponent } from './views/pets/pets.component';
import { AdoptionHousesComponent } from './views/adoption-houses/adoption-houses.component';
import { LeftMenuComponent } from './views/left-menu/left-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/modules/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPetDialogComponent } from './views/pets/add-pet-dialog/add-pet-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    PetsComponent,
    AdoptionHousesComponent,
    LeftMenuComponent,
    AddPetDialogComponent,
  ],
  imports: [
    FlexLayoutModule,
    MatModule,
    BrowserAnimationsModule,
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
