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
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { guncelGorevSayisi } from '../../store/toplamGorevActions';
declare var alertify:any;

@Component({
  selector: 'app-gorev-listesi',
  imports: [MatTableModule, CommonModule, PipeDurum, MatButtonModule,MatCheckboxModule, FormsModule, FontAwesomeModule],
  templateUrl: './gorev-listesi.html',
  styleUrl: './gorev-listesi.css'
})

export class GorevListesi {
  faRightFromBracket = faRightFromBracket;
  displayedColumns: string[] = ['tik','baslik', 'basTarih', 'bitTarih', 'konu', 'durum'];
  silinecekDegerler: any[] = [];
  dataSource = null;
  clickedRows = new Set<DTOGorev>();
  gorevHttpCLient:GorevHttpClientService=inject(GorevHttpClientService)
  dialog = inject(MatDialog);
  count$: Observable<number>;


  constructor(private router: Router, private store: Store<{ data: number }>){
    this.count$ = store.select('data');
  }
  
  ngOnInit() {
      this.get();
  }

  EkleEkraniAc() {
   const dialogRef = this.dialog.open(GorevEkle);

   dialogRef.afterClosed().subscribe(result => {
        this.get();
      });
  }

  guncelleEkraniAc(guncellenecekGorev) {
    const dialogRef =  this.dialog.open(GorevGuncelle,{
    data: guncellenecekGorev
    });

    dialogRef.afterClosed().subscribe(result => {
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
      this.store.dispatch(guncelGorevSayisi({ data: this.dataSource.length }));
    }

  checkboxDegisti(element: any, event: any): void {
    if (event.checked) {
      this.silinecekDegerler.push(element.id);
    } else {
      this.silinecekDegerler = this.silinecekDegerler.filter(item => item !== element.id);
    }
  }
}
