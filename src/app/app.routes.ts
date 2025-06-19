import { Routes } from '@angular/router';
import { Giris } from './Components/giris/giris';
import { Kayit } from './Components/kayit/kayit';
import { GorevListesi } from './Components/gorev-listesi/gorev-listesi';

export const routes: Routes = [
    {path:"",component:GorevListesi},
    {path:"giris",component:Giris},
	{path:"kayit",component:Kayit},
	{path:"gorevListesi",component:GorevListesi},
];
