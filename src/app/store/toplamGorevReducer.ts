import { createReducer, on } from '@ngrx/store';
import { toplamGorevSayisiArtis, toplamGorevSayisiAzalis, guncelGorevSayisi } from './toplamGorevActions';

export const toplamGorevSayisi = 0;

export const toplamGorevReducer = createReducer(
  toplamGorevSayisi,
  on(toplamGorevSayisiArtis, data => data + 1),
  on(toplamGorevSayisiAzalis, data => data - 1),
  on(guncelGorevSayisi, (_, { data }) => data),
);
