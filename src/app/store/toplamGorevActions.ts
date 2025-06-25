import { createAction, props } from '@ngrx/store';

export const guncelGorevSayisi = createAction('[Data] guncelGorevSayisi', props<{ data: number }>());