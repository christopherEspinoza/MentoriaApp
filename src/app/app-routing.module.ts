import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/seguridad/login',
    pathMatch: 'full',
  },
  {
    path:'',
    component: MainLayoutComponent,
    children:[
      { 
        path: 'seguridad', 
        loadChildren: () => import('./modules/seguridad/seguridad.module').then(m => m.SeguridadModule) 
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
