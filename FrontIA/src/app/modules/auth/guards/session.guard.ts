import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@modules/auth/services/auth.service";

export const sessionGuard = (): boolean => {
    const router = inject(Router);
    const authService = inject(AuthService);

    const currentUser = authService.userLogged;
    console.log('session');
    console.log(currentUser);
    console.log('.-');
    
    if(!currentUser || currentUser!.token !==  'esteesuntokencomodequeno' ){
        router.navigate(['/auth/login']);
        return false;
    }

    return true;
}