import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {ScheduleAppComponent} from './scheduleApp.component';
import {ScheduleAppService} from './scheduleApp.service';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {AppointmentType} from '../../models/appointmentType.model';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';

describe('ScheduleAppComponent', () => {
    let component: ScheduleAppComponent;
    let fixture: ComponentFixture<ScheduleAppComponent>;
    let scheduleService: any;

    beforeEach(() => {
        const list = [];

        let appType: AppointmentType;
        appType = new AppointmentType();
        appType.id = 1;
        appType.discount = 2;
        appType.price = 3;
        appType.type = 'one';
        list.push(appType);

        const scheduleAppServiceMock = {
            getAppTypes : jasmine.createSpy('getAppTypes').and.returnValue(of(list)),
            getFilteredClinics: jasmine.createSpy('getFilteredClinics').and.returnValue(of([]))
        };

        TestBed.configureTestingModule({
            declarations: [ScheduleAppComponent],
            imports: [
                HttpClientModule,
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule
            ],
            providers: [
                {provide: ScheduleAppService, useValue: scheduleAppServiceMock}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ScheduleAppComponent);
        scheduleService = TestBed.get(ScheduleAppService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be initialized', () => {
        expect(scheduleService.getAppTypes).toHaveBeenCalled();
    });

    it('when nothing is selected, no search is performed.', () => {
        const searchBtn = fixture.debugElement.query(By.css('#searchBtn')).nativeElement;
        searchBtn.click();
        expect(scheduleService.getFilteredClinics).toHaveBeenCalledTimes(0);

    });


});
