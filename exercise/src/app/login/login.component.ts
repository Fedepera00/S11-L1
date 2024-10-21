import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(); // Simula il login chiamando il servizio
    this.router.navigate(['/users']); // Dopo il login, reindirizza alla pagina Users
  }
}
