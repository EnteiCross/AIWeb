import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
    {
        path: 'list',
        loadChildren: () => import('../list-apps/list.routes').then(m => m.listRoutes)
    },
    {
        path: 'form',
        loadChildren: () => import('../form-apps/form.routes').then(m => m.FormRoutes)
    }
];
