import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './registration/registration.service';
import {LoginService} from './login/login.service';
import {CcadminComponent} from './users/ccadmin.component';
import {CcadminRegisterClinicComponent} from './users/ccadminregisterclinic.component';
import {CcadminService} from './users/ccadmin.service';
import {FooterComponent} from './basic-components/footer/footer.component';
import {CcadminregisterclinicService} from './users/ccadminregisterclinic.service';
import {CcadminInfoComponent} from './users/ccadminInfo.component';
import {CcadminPassComponent} from './users/ccadminPass.component';
import {CcadminCreateDrugCodeComponent} from './users/ccadminCreateDrugCode.component';
import {CcadminCreateDrugCodeService} from './users/ccadminCreateDrugCode.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'ccadmin', component: CcadminComponent},
  { path: 'registerClinic', component: CcadminRegisterClinicComponent},
  {path: 'ccadminInfo', component: CcadminInfoComponent},
  {path: 'ccadminPass', component: CcadminPassComponent},
  {path: 'ccadminDrug', component: CcadminCreateDrugCodeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    CcadminComponent,
    CcadminRegisterClinicComponent,
    CcadminInfoComponent,
    CcadminPassComponent,
    CcadminCreateDrugCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RegistrationService,
    LoginService,
    CcadminService,
    CcadminregisterclinicService,
    CcadminCreateDrugCodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
