import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
//import { MdDialogModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AddEmployeeService } from './_services';
import { AddEmployeeComponent } from './addemployee';
import { ViewEmployeeComponent } from './viewemployee';
import {FilterPipe } from './_services/filter.pipe'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule
         
      //  MdDialogModule
    ],
    declarations: [
        AppComponent,
        FilterPipe,
        AlertComponent,
        AddEmployeeComponent,
        ViewEmployeeComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AddEmployeeService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }