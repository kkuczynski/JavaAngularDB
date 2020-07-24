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
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmationDialogComponent } from './views/confirmation-dialog/confirmation-dialog.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AddUserDialogComponent } from './views/users/add-user-dialog/add-user-dialog.component';
import { AddHouseDialogComponent } from './views/adoption-houses/add-house-dialog/add-house-dialog.component';
import { AssignHouseDialogComponent } from './views/pets/assign-house-dialog/assign-house-dialog.component';
import { LoginService } from 'src/app/services/login.service';
import { BlankComponent } from './views/blank/blank.component';

@NgModule({
  declarations: [
    UsersComponent,
    PetsComponent,
    AdoptionHousesComponent,
    AppComponent,
    LoginComponent,
    LeftMenuComponent,
    AddPetDialogComponent,
    ConfirmationDialogComponent,
    SettingsComponent,
    AddUserDialogComponent,
    AddHouseDialogComponent,
    AssignHouseDialogComponent,
    BlankComponent,
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
