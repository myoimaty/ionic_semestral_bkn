import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/home/asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
      }
    ]
  }, 
  {
    path: 'crear-usuario',
    loadChildren: () => import('./pages/login/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'rest-contrasena',
    loadChildren: () => import('./pages/rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule)
  },

  {
    path: 'login-docentes',
    loadChildren: () => import('./pages/login-docentes/login-docentes.module').then( m => m.LoginDocentesPageModule)
  },
  {
    path: 'homedocente',
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/homedocente/homedocente.module').then( m => m.HomedocentePageModule)
      },
      {
          path: ':id',
          loadChildren: () => import('./pages/homedocente/asis-docente/asis-docente.module').then( m => m.AsisDocentePageModule)
      }
    ]
    
  },
  {
    path: 'asis-docente',
    loadChildren: () => import('./pages/homedocente/asis-docente/asis-docente.module').then( m => m.AsisDocentePageModule)
  },
  {
    path: 'gen-qr',
    loadChildren: () => import('./pages/gen-qr/gen-qr.module').then( m => m.GenQRPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'agregarclas',
    loadChildren: () => import('./pages/homedocente/agregarclas/agregarclas.module').then( m => m.AgregarclasPageModule)
  },
  {
    path: 'apipage',
    loadChildren: () => import('./pages/apipage/apipage.module').then( m => m.ApipagePageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./pages/api/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apiadd',
    loadChildren: () => import('./pages/api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./pages/api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'apiupdate/:id',
    loadChildren: () => import('./pages/api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'apidelete/:id',
    loadChildren: () => import('./pages/api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apidetail/:id',
    loadChildren: () => import('./pages/api/detail/detail.module').then( m => m.DetailPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
