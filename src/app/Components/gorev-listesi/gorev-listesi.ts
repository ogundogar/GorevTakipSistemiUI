import { Component, inject} from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { entityGorev } from '../../entities/entityGorev';
import { CommonModule } from '@angular/common';
import { enumDurum } from '../../enums/enumDurum'
import { PipeDurum } from '../../pipes/pipe-durum';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog} from '@angular/material/dialog';
import { GorevEkle } from './gorev-ekle/gorev-ekle';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GorevGuncelle } from './gorev-guncelle/gorev-guncelle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const ELEMENT_DATA: entityGorev[] = [
  {id:1, baslik: "deneme 1", baslangicTarihi: new Date("August 19, 1975 23:15:30"), bitisTarihi: new Date(), konu: 'H' ,durum: enumDurum.devamEdiyor},
  {id:2,baslik: "deneme 2", baslangicTarihi: new Date("July 20, 69 00:20:18"), bitisTarihi: new Date(), konu: 'He',durum: enumDurum.devamEdiyor },
  {id:3,baslik: "deneme 3", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',durum: enumDurum.tamamlandi},
  {id:4,baslik: "deneme 4", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'Be',durum: enumDurum.tamamlandi},
  {id:5,baslik: "deneme 5", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'B' ,durum: enumDurum.iptal},
  {id:6,baslik: "deneme 6", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'C' ,durum: enumDurum.iptal},
  {id:7,baslik: "deneme 7", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'N' ,durum: enumDurum.iptal},
  {id:8,baslik: "deneme 8", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'O' ,durum: enumDurum.beklemede},
  {id:9,baslik: "deneme 9", baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'F' ,durum: enumDurum.beklemede},
  {id:10,baslik: "deneme 10",baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'Ne',durum: enumDurum.beklemede},
  {id:11,baslik: "deneme 11",baslangicTarihi: new Date(), bitisTarihi: new Date(), konu: 'Ne',durum: enumDurum.beklemede}
];


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
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<entityGorev>();
  

  //Ekleme
  dialog = inject(MatDialog);
  EkleEkraniAc() {
    this.dialog.open(GorevEkle);
  }

  //Güncelleme
  guncelleEkraniAc(guncellenecekGorev) {
    this.dialog.open(GorevGuncelle,{
    data: guncellenecekGorev
    });
  }

silinecekDegerler: any[] = [];
checkboxDegisti(element: any, event: any): void {
  if (event.checked) {
    this.silinecekDegerler.push(element);
  } else {
    this.silinecekDegerler = this.silinecekDegerler.filter(item => item !== element);
  }
  console.log(this.silinecekDegerler);
}

}
