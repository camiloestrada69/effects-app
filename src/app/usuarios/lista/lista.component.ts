import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  public usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultarUsuario();
  }

  consultarUsuario() {
    this.usuarioService.getUser().subscribe( usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }
}
