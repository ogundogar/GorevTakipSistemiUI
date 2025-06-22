import { Component, inject} from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { PipeDurum } from '../../pipes/pipe-durum';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog} from '@angular/material/dialog';
import { GorevEkle } from './gorev-ekle/gorev-ekle';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GorevGuncelle } from './gorev-guncelle/gorev-guncelle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { GorevHttpClientService } from '../../services/customHttoClient/gorev-http-client-service';
import { DTOGorev } from '../../DTOs/DTOGorev';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gorev-listesi',
  imports: [MatTableModule, CommonModule, PipeDurum, MatButtonModule,MatCheckboxModule, FormsModule, FontAwesomeModule],
  templateUrl: './gorev-listesi.html',
  styleUrl: './gorev-listesi.css'
})

export class GorevListesi {
private datas=[];
faRightFromBracket = faRightFromBracket;
  displayedColumns: string[] = ['tik','baslik', 'baslangicTarihi', 'bitisTarihi', 'konu', 'durum'];
  silinecekDegerler: any[] = [];
  dataSource = null;
  clickedRows = new Set<DTOGorev>();
  gorevHttpCLient:GorevHttpClientService=inject(GorevHttpClientService)
  dialog = inject(MatDialog);
  constructor(private router: Router){

  }
  
  ngOnInit() {
      this.get();
    }

  EkleEkraniAc() {
    this.dialog.open(GorevEkle);
  }

  guncelleEkraniAc(guncellenecekGorev) {
    this.dialog.open(GorevGuncelle,{
    data: guncellenecekGorev
    });
  }

  gorevSil() {
    this.gorevHttpCLient.removeRange(this.silinecekDegerler);
  }

  cikisYap(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/giris']);
  }

checkboxDegisti(element: any, event: any): void {
  if (event.checked) {
    this.silinecekDegerler.push(element.id);
  } else {
    this.silinecekDegerler = this.silinecekDegerler.filter(item => item !== element.id);
  }
  console.log(this.silinecekDegerler);
}
async get(){
		const gorevler:{gorevler:DTOGorev[];} = await this.gorevHttpCLient.get();
		this.dataSource=gorevler;
	}

}
