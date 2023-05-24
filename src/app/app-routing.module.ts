import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LoginComponent/login.component';
import { HomeComponent } from './HomeComponent/home.component';
import { BetaComponent } from './BetaComponent/beta.component';
import { PremiumComponent } from './PremiumComponent/premium.component';
import { countGuard } from './count.guard';

const Home: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'home', component:   HomeComponent},
  {path: 'invitado', component: BetaComponent },
  {path: 'premium', component: PremiumComponent, canActivate: [countGuard] },
  // {path: 'template', component:   TemplateComponentComponent, canActivate: [AuthGuard]},
  // {path: 'prueba', component: PruebaComponent },
  // {path: 'register', component: RegistroPsicologoComponent },
  // {path: 'report_psico', component: ReportePsicologoComponent },
  // {path: 'validar', component: ValidarSesionesComponent },
  // {path: 'activated', component: ActivatedComponent },
  // {path: 'paciente', component: PacienteComponent }
];

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'home', component:   HomeComponent, children: Home},
  {redirectTo: '/login', pathMatch: 'full',path: '**',},
  // {path: 'PLogin', component: PacienteLoginComponent },
  // {path: 'PSesiones', component: PacienteSesionesComponent, canActivate: [PacienteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent, 
];
