import {createReducer, on} from '@ngrx/store';
import * as actionsUsuario from '../actions/usuario.actions';
import {Usuario} from '../../models/usuario';

export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,

  }
;

const _usuarioReducer = createReducer(usuarioInitialState,
  on( actionsUsuario.cargarUsuario, (state, {id}) => ({
    ...state,
    loading: true,
    id : id
  })),

  on( actionsUsuario.cargarUsuarioSuccess, (state, {usuario}) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...usuario},
  })),

  on( actionsUsuario.cargarUsuarioError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload = {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}


