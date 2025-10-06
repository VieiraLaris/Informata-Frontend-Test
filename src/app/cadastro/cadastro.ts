import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class CadastroComponent { 
  nome: string = '';
  email: string = '';
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router) {}
    
  cadastrar() {
    if (this.nome && this.email && this.usuario && this.senha) {
      this.router.navigate(['/catalogo']);
      alert('Conta criada.');
    } else {
      alert('Todos os campos são obrigatórios!'); 
    }
  }
}
