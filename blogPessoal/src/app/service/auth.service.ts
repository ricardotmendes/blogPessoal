import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

logar(userLogin: UserLogin){
  return this.http.post('http://localhost:8080/usuarios/login', userLogin)
}

cadastrar(user: User) {
  return this.http.post('http://localhost:8080/usuarios/cadastro', user)
}

// Método para mostrar o botão Sair apenas quando houver um token, ou seja, usuário logado
btnSair(){
  let ok = false
  let token = environment.token

  if (token != '') {
    ok = true
  }
  return ok
}
// Método para mostrar o botão Cadastrar e Login, para quando nao houver usuario logado

btnLogin(){
  let ok = false
  let token = environment.token
  
  if (token == '') {
    ok = true
  }
  return ok
  }


  
}


