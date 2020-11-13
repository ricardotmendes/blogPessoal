import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
   //método para LOGAR usuarios. Usando o subscribe ele pega as informações em formato Json e transforma em um objeto, usando o resp: UserLogin, 
    // com o localStorage.setItem('token', this.userLogin.token) acessa o token e manda pro localStorage, garantindo o status "logado"
  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
     this.userLogin = resp
      environment.token = this.userLogin.token
      
     this.router.navigate(['/feed'])
    })
  }
}
