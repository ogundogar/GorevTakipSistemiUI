import { createReducer, on } from '@ngrx/store';
import { guncelGorevSayisi } from './toplamGorevActions';

export const toplamGorevSayisi = 0;

export const toplamGorevReducer = createReducer(
  toplamGorevSayisi,
  on(guncelGorevSayisi, (_, { data }) => data),
);
