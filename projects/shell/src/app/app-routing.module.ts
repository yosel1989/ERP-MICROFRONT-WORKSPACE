import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('auth/Module').then(m => m.AppModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then(m => m.AppModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('gps/Module').then(m => m.AppModule)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
