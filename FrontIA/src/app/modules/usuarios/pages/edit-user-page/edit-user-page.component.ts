import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role, Usuario } from '@modules/usuarios/interface/usuario.interface';
import { UsuariosService } from '@modules/usuarios/services/usuarios.service';
import { switchMap } from 'rxjs';
import { MessageBoxComponent } from "../../../shared/components/message-box/message-box.component";

@Component({
  selector: 'app-edit-user-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MessageBoxComponent],
  templateUrl: './edit-user-page.component.html',
  styleUrl: './edit-user-page.component.css'
})
export class EditUserPageComponent implements OnInit{

  userForm!:  FormGroup;
  initalValues: any;
  isLoading: boolean = false;
  isShowMessage: boolean = false;
  message: string = '';

  typesUsers = [
    { value: 'Invitado', name: 'Invitado' },
    { value: 'Usuario', name: 'Usuario' },
    { value: 'Autorizador', name: 'Autorizador' },
    { value: 'Administrador', name: 'Administrador' },
  ];

  constructor(private router: Router,
    private usuariosService: UsuariosService,
    private activedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activedRoute.params  
      .pipe(
        switchMap(({id}) => this.usuariosService.getUserById(id))
      )
      .subscribe( user => {
        if(!user){
          this.router.navigate(['/apps/users/list-users']);
        }

        this.initForm(user!);
      });
  }

  initForm(user: Usuario): void {
    this.userForm = new FormGroup({
      usernumber: new FormControl<string>('', [Validators.required, Validators.minLength(3), this.isValidUserNumber]),
      username: new FormControl<string>('',[Validators.required, Validators.minLength(3)]),
      rol: new FormControl<Role>(Role.INVITADO,[Validators.required])
    });
  
    this.userForm.reset(user);
    this.initalValues = this.userForm.value;
  }

  get hasFormChanges(): boolean {
    return JSON.stringify(this.userForm.value) !== JSON.stringify(this.initalValues);
  }

  isValidField(field: string): boolean | null {
    return this.userForm.controls[field].errors && this.userForm.controls[field].touched;
  }

  isValidUserNumber(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim();
    const isNumeric = /^[0-9]+$/.test(value);
    
    return isNumeric ? null : { noNumeric: true }
  }

  onSubmit(): void{
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const user = this.userForm.value;
    this.usuariosService.updateUsuario(user).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      this.isShowMessage = true;
      this.message = `¡Se a modificado a ${ resp.user.username } como ${resp.user.rol} con éxito!`;
      setTimeout(() => this.isShowMessage = false,5000)
      this.initalValues = this.userForm.value;
    })
  }

  onCancel(): void{
    this.userForm.reset(this.initalValues);
  }

}
