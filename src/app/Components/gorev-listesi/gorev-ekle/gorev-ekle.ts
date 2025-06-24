import {Component, inject} from '@angular/core';
import {MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { GorevHttpClientService } from '../../../services/customHttoClient/gorev-http-client-service';
import { DTOGorev } from '../../../DTOs/DTOGorev';
import { GorevListesi } from '../gorev-listesi';
declare var alertify:any;


@Component({
  selector: 'app-gorev-ekle',
  imports: [MatDialogContent,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,ReactiveFormsModule,MatButtonModule],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'tr-TR'},provideNativeDateAdapter()],
  templateUrl: './gorev-ekle.html',
  styleUrl: './gorev-ekle.css'
})
export class GorevEkle {
 frm:FormGroup;
 readonly dialogRef = inject(MatDialogRef<GorevListesi>);
 constructor(private formBuilder:FormBuilder,private gorevHttpClient:GorevHttpClientService){
  this.frm=formBuilder.group({
    baslik:[""],
    basTarih:[""],
    bitTarih:[""],
    konu:[""],
    durum:[""],
  })
 }

 async gorevEkle(){
    console.log(this.frm.value);
    const gorev:DTOGorev={
      baslik: this.frm.value.baslik,
      basTarih: new Date(this.frm.value.basTarih),
      bitTarih: new Date(this.frm.value.bitTarih),
      konu: this.frm.value.konu,
      durum: Number(this.frm.value.durum),
    }
    await this.gorevHttpClient.post(gorev, 
      ()=>{ 
      alertify.set('notifier','position', 'top-center');
      alertify.success('İşlem başarılı bir şekilde gerçekleşti'); 
      this.dialogRef.close();
      }, ()=>{ 
      alertify.set('notifier','position', 'top-center');
      alertify.error('Görev ekleme sırasında hata oluştur')
      }
  );
 }

 onNoClick(): void {
    this.dialogRef.close();
  }


}
