import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { HomeComponent } from './home/home.component';
import { GetOwnerComponent } from './get-owner/get-owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { AddNewOwnerComponent } from './add-new-owner/add-new-owner.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'get-owner',
    component: GetOwnerComponent
  },
  {
    path: 'edit-owner/:id',
    component: EditOwnerComponent
  },
  {
    path: 'owner-add',
    component: EditOwnerComponent
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
