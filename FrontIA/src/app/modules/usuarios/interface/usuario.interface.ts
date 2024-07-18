export interface Usuario {
    username:    string;
    usernumber: string;
    rol:     'Invitado' | 'Usuario' | 'Autorizador' |'Administrador'  
}
