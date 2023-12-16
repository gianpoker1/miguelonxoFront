import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro-usuario-modal',
  templateUrl: './registro-usuario-modal.component.html',
  styleUrls: ['./registro-usuario-modal.component.css']
})
export class RegistroUsuarioModalComponent {

  usuarioForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegistroUsuarioModalComponent>,
    private formBuilder: FormBuilder,
    private registroService: RegistroService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      tipo: ['']
    });
  }

  registrarUsuario(): void {
    if(this.usuarioForm.valid){
      const usuario: Usuario = this.usuarioForm.value;
      const tipo: string = this.usuarioForm.get('tipo')?.value;
      const payload = {
        usuario: {...usuario},
        tipo: tipo
      };
      console.log('Usuario a registrar', JSON.stringify(payload));
      this.registroService.save(usuario, tipo).subscribe(savedUsuario => {
        console.log('Usuario registrado correctamente', savedUsuario);
        this.dialogRef.close();
      }, error => {
        console.log('Error al registrar usuario', error);
      }); 
    }
  }

  //obtener el usuario actual y su rol
  getLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
