import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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

  constructor(private formBuilder:FormBuilder){
    console.log(this.data)
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
  }

 }
