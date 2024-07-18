import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@modules/auth/services/auth.service";

export const AdminGuard = (): boolean => {
    const router = inject(Router);
    const authService = inject(AuthService);

    const currentUser = authService.userLogged;

    if(currentUser.rol !== 'Administrador'){
        router.navigate(['/apps/home'])
        return false;
    }

    return true;
}