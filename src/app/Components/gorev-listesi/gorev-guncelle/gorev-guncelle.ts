import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DTOGorev } from '../../../DTOs/DTOGorev';
import { GorevHttpClientService } from '../../../services/customHttoClient/gorev-http-client-service';

@Component({
  selector: 'app-gorev-guncelle',
  imports: [MatDialogContent,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, ReactiveFormsModule, MatButtonModule],
  
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},provideNativeDateAdapter()],
  templateUrl: './gorev-guncelle.html',
  styleUrl: './gorev-guncelle.css'
})
export class GorevGuncelle {
  data = inject(MAT_DIALOG_DATA);
  frm:FormGroup;

  constructor(private formBuilder:FormBuilder,private gorevHttpClient:GorevHttpClientService){
    this.frm=formBuilder.group({
      baslik:[this.data.baslik],
      basTarih:[this.data.baslangicTarihi],
      bitTarih:[this.data.bitTarih],
      konu:[this.data.konu],
      durum:[String(this.data.durum)],
    })
  }

  gorevGuncelle(){
      console.log(this.frm.value);
      const gorev:DTOGorev={
        id:this.data.id,
        baslik: this.frm.value.baslik,
        baslangicTarihi: this.frm.value.basTarih,
        bitisTarihi: this.frm.value.bitTarih,
        konu: this.frm.value.konu,
        durum: Number(this.frm.value.durum),
        kullaniciId: 4,
      }
      this.gorevHttpClient.put(gorev);
   }

 }
