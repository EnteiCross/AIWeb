import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/page/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('../app/modules/home/home.routes').then(m => m.homeRoutes)
    },
];
