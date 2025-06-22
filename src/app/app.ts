import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Giris } from './Components/giris/giris';
import { Kayit } from './Components/kayit/kayit';
import { GorevListesi } from './Components/gorev-listesi/gorev-listesi';
import { AuthService } from './services/auth-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Giris,Kayit,GorevListesi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private authService:AuthService){
    this.authService.identityCheck();
  }
}
