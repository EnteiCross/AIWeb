import { Routes } from '@angular/router';
import { ListUsuariosPageComponent } from '@modules/usuarios/pages/list-usuarios-page/list-usuarios-page.component';
import { EditUserPageComponent } from '@modules/usuarios/pages/edit-user-page/edit-user-page.component';

export const usuariosRoutes: Routes = [
    { path: 'list-users', component: ListUsuariosPageComponent },
    { path: 'edit/:id', component: EditUserPageComponent},
];
