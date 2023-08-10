import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewAllComponent } from './view-all/view-all.component';

import{ManageGuard} from './manage.guard'
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent,canActivate:[ManageGuard]},
  {path:"view/:id",component:ViewComponent,canActivate:[ManageGuard]},
  {path:"edit/:id",component:EditComponent,canActivate:[ManageGuard]},
  {path:"add",component:AddEmpComponent,canActivate:[ManageGuard]},
  {path:"employees",component:ViewAllComponent,canActivate:[ManageGuard]},
  {path:"password",component:PasswordComponent,canActivate:[ManageGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
