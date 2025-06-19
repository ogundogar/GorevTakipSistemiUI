import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Giris } from './Components/giris/giris';
import { Kayit } from './Components/kayit/kayit';
import { GorevListesi } from './Components/gorev-listesi/gorev-listesi';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Giris,Kayit,GorevListesi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GorevTakipSistemiUI';
}
