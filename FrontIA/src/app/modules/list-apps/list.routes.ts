import { Routes } from "@angular/router";
import { ListAppsComponent } from "./list-apps.component";

export const listRoutes: Routes = [
    {
        path: '',
        component: ListAppsComponent,
        outlet: 'routerHome'
    }
]