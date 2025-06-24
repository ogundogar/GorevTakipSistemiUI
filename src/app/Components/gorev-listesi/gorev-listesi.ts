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
declare var alertify:any;

@Component({
  selector: 'app-gorev-listesi',
  imports: [MatTableModule, CommonModule, PipeDurum, MatButtonModule,MatCheckboxModule, FormsModule, FontAwesomeModule],
  templateUrl: './gorev-listesi.html',
  styleUrl: './gorev-listesi.css'
})

export class GorevListesi {
private datas=[];
faRightFromBracket = faRightFromBracket;
  displayedColumns: string[] = ['tik','baslik', 'basTarih', 'bitTarih', 'konu', 'durum'];
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
   const dialogRef = this.dialog.open(GorevEkle);

   dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.get();
      });
  }

  guncelleEkraniAc(guncellenecekGorev) {
    const dialogRef =  this.dialog.open(GorevGuncelle,{
    data: guncellenecekGorev
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.get();
      });
  }

  gorevSil() {
     alertify.confirm('Silme', 'Görevleri Silmek İstediğinize Emin Misiniz?', 
      ()=>{ 
        this.gorevHttpCLient.removeRange(this.silinecekDegerler);
        this.get();
       },()=>{ });
  }

  cikisYap(){
    alertify.confirm('Çıkış', 'Çıkış Yapmak İstediğinize Emin Misiniz?', 
      ()=>{ 
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.router.navigate(['/giris']);
       },()=>{ });
  }

  async get(){
      const gorevler:{gorevler:DTOGorev[];} = await this.gorevHttpCLient.get();
      this.dataSource=gorevler;
    }

  checkboxDegisti(element: any, event: any): void {
    if (event.checked) {
      this.silinecekDegerler.push(element.id);
    } else {
      this.silinecekDegerler = this.silinecekDegerler.filter(item => item !== element.id);
    }
    console.log(this.silinecekDegerler);
  }


}
