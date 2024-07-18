import { Routes } from "@angular/router";
import { FormAppsComponent } from "./form-apps.component";

export const FormRoutes: Routes = [
    {
        path: '',
        component: FormAppsComponent,
        outlet: 'routerHome'
    }
]