import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const appsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ]
    }
];
