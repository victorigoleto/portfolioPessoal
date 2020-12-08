import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha = String

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.authService.cadastrar(this.user).subscribe((resp: User) =>{
      this.user = resp
    })

  }

}
