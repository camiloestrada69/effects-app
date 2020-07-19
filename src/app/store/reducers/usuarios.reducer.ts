import {createReducer, on} from '@ngrx/store';
import * as actionsUsuarios from '../actions/usuarios.actions';
import {Usuario} from '../../models/usuario';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,

}
;

const _usuariosReducer = createReducer(usuariosInitialState,
  on( actionsUsuarios.cargarUsuarios, state => ({...state, loading: true})),

  on( actionsUsuarios.cargarUsuariosSuccess, (state, {usuarios}) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [ ...usuarios],
  })),

  on( actionsUsuarios.cargarUsuariosError, (state, {payload}) => ({
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

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}


