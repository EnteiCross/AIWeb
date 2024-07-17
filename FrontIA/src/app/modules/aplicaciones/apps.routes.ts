import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListAppsPageComponent } from './pages/list-apps-page/list-apps-page.component';
import { HomeAppsPageComponent } from './pages/home-apps-page/home-apps-page.component';
import { FormsAppsPageComponent } from './pages/forms-apps-page/forms-apps-page.component';

// path apps/
export const appsRoutes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'home',    component: HomeAppsPageComponent },
            { path: 'list',    component: ListAppsPageComponent },
            { path: 'new-app', component: FormsAppsPageComponent },
            { path: 'edit/:id', component: FormsAppsPageComponent },
            { path: '**', redirectTo: 'home' },
        ]
    }
];
