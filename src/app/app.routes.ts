import { Routes } from '@angular/router';
import { Erro404Component } from './features/users/shared/erro404/erro404.component';


export const routes: Routes = [
 { path: "user" , loadChildren : ()=>import('./features/users/user.module').then((m)=>m.UserModule)},

 { path: '', pathMatch: 'full', redirectTo: 'user' },


 { path :'**', component : Erro404Component}

];
