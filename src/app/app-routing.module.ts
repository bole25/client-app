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
import {StaffComponent} from './staff/editStaffInfo/staff.component';
import {SelectClinicComponent} from './patient/listOfClinics/selectClinic.component';
import {HistoryPatientComponent} from './patient/history/historyPatient.component';
import {WorkCalendarComponent} from './doctor/workCalendar/workCalendar.component';
import {HolidayAbsenceComponent} from './doctor/holiday-absence/holiday-absence.component';
import {BookingComponent} from './doctor/booking/booking.component';
import {combineAll} from 'rxjs/operators';
import {ListOfPatientsComponent} from './doctor/listOfPatients/listOfPatients.component';
import {NewCCAComponent} from './newCCA/newCCA.component';
import {DoctorInfoComponent} from './doctor/doctor-info/doctor-info.component';
import {DarComponent} from './dar/dar.component';
import {CreatingDiagnoseComponent} from './ccadmin/creatingDiagnose/creatingDiagnose.component';

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
  {path: 'accept/:id', component: AcceptComponent},
  {path: 'editStaff', component: StaffComponent},
  {path: 'selectClinic', component: SelectClinicComponent},
  {path: 'historyPatient', component: HistoryPatientComponent},
  {path: 'workCalendar', component: WorkCalendarComponent},
  {path: 'holidayAbsence', component: HolidayAbsenceComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'listOfPatients', component: ListOfPatientsComponent},
  {path: 'newCCA', component: NewCCAComponent},
  {path: 'editDocInfo', component: DoctorInfoComponent},
  {path: 'dar', component: DarComponent},
  {path: 'ccaDiagnose', component: CreatingDiagnoseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
