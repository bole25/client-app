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
import {RequestsComponent} from './requests/requests.component';
import {RequestsService} from './requests/requests.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'requests', component: RequestsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RequestsComponent
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
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
