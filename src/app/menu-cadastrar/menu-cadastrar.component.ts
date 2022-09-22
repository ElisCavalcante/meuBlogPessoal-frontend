import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu-cadastrar',
  templateUrl: './menu-cadastrar.component.html',
  styleUrls: ['./menu-cadastrar.component.css']
})
export class MenuCadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {

    window.scroll(0, 0)
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert("As senhas não conferem")
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        
        this.user = resp
        this.router.navigate(["/entrar"])
        alert("Usuário cadastrado com sucesso.")
      })

    }
  }
}
