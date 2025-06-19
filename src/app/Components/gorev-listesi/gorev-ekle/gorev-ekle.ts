import {Component} from '@angular/core';
import {MatDialogContent} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gorev-ekle',
  imports: [MatDialogContent,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,ReactiveFormsModule,MatButtonModule],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},provideNativeDateAdapter()],
  templateUrl: './gorev-ekle.html',
  styleUrl: './gorev-ekle.css'
})
export class GorevEkle {
 frm:FormGroup;
 constructor(private formBuilder:FormBuilder){
  this.frm=formBuilder.group({
    baslik:[""],
    basTarih:[""],
    bitTarih:[""],
    konu:[""],
    durum:[""],
  })
 }
 gorevEkle(){
  console.log(this.frm.value)
 }
}
