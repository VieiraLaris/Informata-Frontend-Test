import { Component } from '@angular/core';
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

  constructor(private router: Router) {}

  logar() {
    if (this.usuario === 'teste' && this.senha === '123') {
      this.router.navigate(['/catalogo']);
    } else {
      alert('Usuário ou senha incorretos!'); 
    }
  }
}
