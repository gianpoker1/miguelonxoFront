import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private authService: AuthService,
    private router: Router) { }

    onSubmit() {
      this.authService.login(this.email, this.password).subscribe(result => {
        console.log('email: ', this.email);
        console.log('Resultado del inicio de sesion', result);

        if(result){
          if(this.authService.isAdmin()){
            this.router.navigate(['/admin']);
          }else if (this.authService.isPlayer()){
            this.router.navigate(['/player']);
          }
        }else {
          alert('Usuario o contraseña incorrectos');
        }
      });
    }

}
