import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {cargarUsuarios} from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  public usuarios: Usuario[];
  public loading: boolean;
  public error: any;

  constructor(private usuarioService: UsuarioService, private store: Store<AppState>) { }

  ngOnInit() {
    //this.consultarUsuario();
    this.store.select('usuarios').subscribe(({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(cargarUsuarios());
  }

  consultarUsuario() {
    this.usuarioService.getUser().subscribe( usuarios => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }
}
