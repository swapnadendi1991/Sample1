import { Routes, RouterModule } from '@angular/router';


import { AddEmployeeComponent } from './addemployee';
import { ViewEmployeeComponent } from './viewemployee';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: AddEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: AddEmployeeComponent },
    { path: 'register', component: ViewEmployeeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);