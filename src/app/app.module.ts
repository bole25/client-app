import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './registration/registration.service';
import {LoginService} from './login/login.service';
import {CcadminComponent} from './ccadmin/registerClinicAdmin/ccadmin.component';
import {CcadminRegisterClinicComponent} from './ccadmin/registerClinic/ccadminregisterclinic.component';
import {CcadminService} from './ccadmin/registerClinicAdmin/ccadmin.service';
import {FooterComponent} from './basic-components/footer/footer.component';
import {CcadminregisterclinicService} from './ccadmin/registerClinic/ccadminregisterclinic.service';
import {CcadminInfoComponent} from './ccadmin/adminInfo/ccadminInfo.component';
import {CcadminPassComponent} from './ccadmin/passwordChanging/ccadminPass.component';
import {CcadminCreateDrugCodeComponent} from './ccadmin/drugCode/ccadminCreateDrugCode.component';
import {CcadminCreateDrugCodeService} from './ccadmin/drugCode/ccadminCreateDrugCode.service';
import {RequestsComponent} from './requests/requests.component';
import {RequestsService} from './requests/requests.service';
import {Interceptor} from './intercepter/Interceptor';
import {AcceptComponent} from './accept/accept.component';
import {AcceptService} from './accept/accept.service';
import {StaffComponent} from './staff/editStaffInfo/staff.component';
import {SelectClinicComponent} from './patient/listOfClinics/selectClinic.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {HistoryPatientComponent} from './patient/history/historyPatient.component';
import {WorkCalendarComponent} from './doctor/workCalendar/workCalendar.component';
import {HolidayAbsenceComponent} from './doctor/holiday-absence/holiday-absence.component';
import {BookingComponent} from './doctor/booking/booking.component';
import {ListOfPatientsComponent} from './doctor/listOfPatients/listOfPatients.component';
import {StaffService} from './staff/editStaffInfo/staff.service';
import {NewCCAComponent} from './newCCA/newCCA.component';
import {NewCCAService} from './newCCA/newCCA.service';
import {DarComponent} from './dar/dar.component';
import {DarService} from './dar/dar.service';
import {CreatingDiagnoseComponent} from './ccadmin/creatingDiagnose/creatingDiagnose.component';
import {CreatingDiagnoseService} from './ccadmin/creatingDiagnose/creatingDiagnose.service';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalComponent} from './modal/modal.component';
import {IzmjeniSifruService} from './ccadmin/passwordChanging/izmjeniSifru.service';
import {RecipesValidationComponent} from './nurse/recipesValidation/recipesValidation.component';
import {RecipesValidationService} from './nurse/recipesValidation/recipesValidation.service';
// import { ModalComponent as ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'registration', component: RegistrationComponent},
  { path: 'requests', component: RequestsComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'ccadmin', component: CcadminComponent},
  { path: 'registerClinic', component: CcadminRegisterClinicComponent},
  {path: 'ccadminInfo', component: CcadminInfoComponent},
  {path: 'ccadminPass', component: CcadminPassComponent},
  {path: 'ccadminDrug', component: CcadminCreateDrugCodeComponent},
  {path: 'accept', component: AcceptComponent},
  {path: 'accept/:id', component: AcceptComponent},
  {path: 'editStaff', component: StaffComponent},
  {path: 'selectClinic', component: SelectClinicComponent},
  {path: 'historyPatient', component: HistoryPatientComponent},
  {path: 'workCalendar', component: WorkCalendarComponent},
  {path: 'holidayAbsence', component: HolidayAbsenceComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'listOfPatients', component: ListOfPatientsComponent},
  {path: 'newCCA', component: NewCCAComponent},
  {path: 'dar', component: DarComponent},
  {path: 'ccaDiagnose', component: CreatingDiagnoseComponent},
  {path: 'recipesValidation', component: RecipesValidationComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    RequestsComponent,
    RegistrationComponent,
    CcadminComponent,
    CcadminRegisterClinicComponent,
    CcadminInfoComponent,
    CcadminPassComponent,
    CcadminCreateDrugCodeComponent,
    AcceptComponent,
    StaffComponent,
    SelectClinicComponent,
    HistoryPatientComponent,
    WorkCalendarComponent,
    HolidayAbsenceComponent,
    BookingComponent,
    ListOfPatientsComponent,
    NewCCAComponent,
    DarComponent,
    CreatingDiagnoseComponent,
    ModalComponent,
    RecipesValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}),
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    RegistrationService,
    LoginService,
    RequestsService,
    LoginService,
    CcadminService,
    CcadminregisterclinicService,
    CcadminCreateDrugCodeService,
    StaffService,
    NewCCAService,
    DarService,
    CreatingDiagnoseService,
    IzmjeniSifruService,
    RecipesValidationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    AcceptService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
