import { Component, inject } from '@angular/core';
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

  private router = inject(Router);
    
  cadastrar() {
    if (this.nome && this.email && this.usuario && this.senha) {
      
      const novoUsuario = {
        usuario: this.usuario,
        senha: this.senha
      };

      localStorage.setItem('currentUser', JSON.stringify(novoUsuario));
      
      this.router.navigate(['/login']);
      alert('Conta criada!');
    } else {
      alert('Todos os campos são obrigatórios!'); 
    }
  }
}