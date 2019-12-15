import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {RequestsComponent} from './requests/requests.component';
import { CcadminComponent} from './ccadmin/registerClinicAdmin/ccadmin.component';
import {CcadminRegisterClinicComponent} from './ccadmin/registerClinic/ccadminregisterclinic.component';
import {CcadminInfoComponent} from './ccadmin/adminInfo/ccadminInfo.component';
import {CcadminCreateDrugCodeComponent} from './ccadmin/drugCode/ccadminCreateDrugCode.component';
import {CcadminPassComponent} from './ccadmin/passwordChanging/ccadminPass.component';
import {AcceptComponent} from './accept/accept.component';

const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path: 'registration', component: RegistrationComponent},
  {path: 'users', component: RegistrationComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'deleterequest', component: RequestsComponent},
  {path: 'acceptrequest', component: RequestsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'users', component: RegistrationComponent },
  { path: 'ccadmin', component: CcadminComponent},
  {path: 'registerClinic', component: CcadminRegisterClinicComponent},
  {path: 'ccadminInfo', component: CcadminInfoComponent},
  {path: 'ccadminPass', component: CcadminPassComponent},
  {path: 'ccadminDrug', component: CcadminCreateDrugCodeComponent},
  {path: 'accept', component: AcceptComponent},
  {path: 'accept/:id', component: AcceptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
