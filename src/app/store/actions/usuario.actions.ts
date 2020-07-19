import {createAction, props} from '@ngrx/store';
import { Usuario} from '../../models/usuario';

export const cargarUsuario = createAction(
  '[Usuario] Cargar usuario',
        props<{id: string}>()
  );

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar usuario success',
  props<{usuario: Usuario}>(),
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar usuario error',
  props<{ payload: any }>(),
);
