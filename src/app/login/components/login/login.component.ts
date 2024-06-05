import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  constructor(private authService: AuthService) {}
  login(email: string, password: string): void {
    this.authService.login().subscribe(
      () => {
        // Redirecionar para a página de dashboard ou outra página após o login bem-sucedido
      },
      (error) => {
        // Tratar erro de login, como exibir uma mensagem de erro para o usuário
      }
    );
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
