import { Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListAppsPageComponent } from './pages/list-apps-page/list-apps-page.component';
import { HomeAppsPageComponent } from './pages/home-apps-page/home-apps-page.component';
import { FormsAppsPageComponent } from './pages/forms-apps-page/forms-apps-page.component';
import { ListUsuariosPageComponent } from '@modules/usuarios/pages/list-usuarios-page/list-usuarios-page.component';
import { AdminGuard } from '@modules/usuarios/guards/adminGuard.guard';
import { EditUserPageComponent } from '@modules/usuarios/pages/edit-user-page/edit-user-page.component';

export const appsRoutes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'home', component: HomeAppsPageComponent },
            { path: 'list-apps', component: ListAppsPageComponent },
            { path: 'new-app', component: FormsAppsPageComponent },
            { path: 'edit/:id', component: FormsAppsPageComponent },
            { path: 'users/list-users', component: ListUsuariosPageComponent,  canActivate: [AdminGuard]},
            { path: 'users/edit/:id', component: EditUserPageComponent,  canActivate: [AdminGuard]},
            { path: '**', redirectTo: 'home' }
        ]
    }
];
