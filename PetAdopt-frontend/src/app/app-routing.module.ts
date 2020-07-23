import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './views/pets/pets.component';
import { AdoptionHousesComponent } from './views/adoption-houses/adoption-houses.component';
import { UsersComponent } from './views/users/users.component';
import { SettingsComponent } from './views/settings/settings.component';



const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'houses', component: AdoptionHousesComponent },
  { path: 'settings', component: SettingsComponent},
  { path: '**', redirectTo: 'pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponents = [PetsComponent, UsersComponent, AdoptionHousesComponent, SettingsComponent];
