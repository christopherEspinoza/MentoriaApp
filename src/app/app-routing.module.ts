import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrEditPersonaComponent } from './modules/personas/create-or-edit-person/create-or-edit-persona.component';
import { ListPersonComponent } from './modules/personas/list-person/list-person.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
  { 
    path: 'listado', 
    component: ListPersonComponent
  },
  { 
    path: 'editar/:id', 
    component: CreateOrEditPersonaComponent
  },
  { 
    path: 'nuevo/:id', 
    component: CreateOrEditPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
