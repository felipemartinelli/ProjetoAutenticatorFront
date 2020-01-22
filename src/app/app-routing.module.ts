import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '',         component: InicioComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'inicio',   component: InicioComponent },
  { path: 'logout',   component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
