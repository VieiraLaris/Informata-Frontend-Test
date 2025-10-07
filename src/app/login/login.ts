import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  private router = inject(Router);

  logar() {
    const usuarioJson = localStorage.getItem('currentUser');

    if (usuarioJson) {
      const storedUser = JSON.parse(usuarioJson);
      
      if (this.usuario === storedUser.usuario && this.senha === storedUser.senha) {
        localStorage.setItem('isLoggedIn', 'true'); 
        this.router.navigate(['/catalogo']);
        return;
      }
    } 
    alert('Usuário ou senha incorretos!'); 
  }
}