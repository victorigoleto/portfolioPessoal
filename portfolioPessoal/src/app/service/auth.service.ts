import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/userLogin';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) : Observable<UserLogin>{
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')
    if (token != null){
      ok = true
    }
    return ok 
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')
    
    if (token == null){
      ok = true
    }
    return ok 
  }
}
