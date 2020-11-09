import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string
  constructor(private authService: AuthService, private router: Router) { }
  //injeção de dependências do autenticador e de rotas
  ngOnInit() {
    
  }
  conferirSenha(event: any) {
    this.senha = event.target.value
    //any siginificado que qualquer tipo de dado pode entrar nesse campo
    
  }

  cadastrar() {
    //método para cadastrar usuarios. Usando o subscribe ele pega as informações em formato Json e transforma em um objeto, usando o resp: User para defini-lo
    // a validação funciona comparando a variavel do TS (senha:string) através do this.senha com o this.user.senha, que é o valor digitado no campo de conferir senha 
  
    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert ('Usuário cadastrado com sucesso!')

      })
    } else {
      alert('Saus senhas não conferem')
    }
       
  }
}
