import { createAction, props } from '@ngrx/store';

export const toplamGorevSayisiArtis = createAction('[Data] toplamGorevSayisiArtis');
export const toplamGorevSayisiAzalis = createAction('[Data] toplamGorevSayisiAzalis');
export const guncelGorevSayisi = createAction('[Data] guncelGorevSayisi', props<{ data: number }>());