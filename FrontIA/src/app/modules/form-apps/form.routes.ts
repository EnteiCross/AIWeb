import { Routes } from "@angular/router";
import { FormAppsComponent } from "./form-apps.component";

export const listRoutes: Routes = [
    {
        path: '',
        component: FormAppsComponent,
        outlet: 'routerHome'
    }
]