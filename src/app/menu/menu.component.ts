import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginStateServiceService } from '../services/login-state-service.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroUsuarioModalComponent } from '../registro-usuario-modal/registro-usuario-modal.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isLoggedIn!: boolean;
  private loginStatusSubcription!: Subscription;

  constructor(private router: Router,
    protected authService: AuthService,
    private loginStateService: LoginStateServiceService,
    public dialog: MatDialog) { 
      this.loginStatusSubcription = this.loginStateService.currentLoginStatus.subscribe(status => this.isLoggedIn = status);
    }

    ngOnDestroy(): void {
      this.loginStatusSubcription.unsubscribe();
    }

    logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    abrirModalRegistro(): void {
      const dialogRef = this.dialog.open(RegistroUsuarioModalComponent, {
        width: '1000px'
      });
    }

    abrirModalLogin(): void {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '1000px'
      });
    }

    isAdmin(): boolean {
      return this.authService.isAdmin();
    }

    isPlayer(): boolean {
      return this.authService.isPlayer();
    }

}
