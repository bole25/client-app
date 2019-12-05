import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {RequestsComponent} from './requests/requests.component';
import { CcadminComponent} from './users/ccadmin.component';
import {CcadminRegisterClinicComponent} from './users/ccadminregisterclinic.component';
import {CcadminInfoComponent} from './users/ccadminInfo.component';
import {CcadminCreateDrugCodeComponent} from './users/ccadminCreateDrugCode.component';
import {CcadminPassComponent} from './users/ccadminPass.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'users', component: RegistrationComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'deleterequest', component: RequestsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'users', component: RegistrationComponent },
  { path: 'ccadmin', component: CcadminComponent},
  {path: 'registerClinic', component: CcadminRegisterClinicComponent},
  {path: 'ccadminInfo', component: CcadminInfoComponent},
  {path: 'ccadminPass', component: CcadminPassComponent},
  {path: 'ccadminDrug', component: CcadminCreateDrugCodeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
