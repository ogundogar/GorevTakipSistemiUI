import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../giris/giris';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { KullaniciHttpClientService } from '../../services/customHttoClient/kullanici-http-client-service';
import { DTOKullanici } from '../../DTOs/DTOKullanici';

@Component({
  selector: 'app-kayit',
  imports: [ReactiveFormsModule, MatButtonModule,MatDialogContent,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,FormsModule],
  templateUrl: './kayit.html',
  styleUrl: './kayit.css'
})
export class Kayit {
  epostaFormControl = new FormControl('', [Validators.required, Validators.email]);
  sifreFormControl = new FormControl('', [Validators.required]);
  sifreDogrulamaFormControl= new FormControl('', [Validators.required]);
  kullaniciAdiFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  frm:FormGroup;
  constructor(private router: Router,private formBuilder:FormBuilder,private kullaniciHttpClient:KullaniciHttpClientService) {
    this.frm=formBuilder.group({
    adi:[""],
    email:[""],
    sifre:[""],
    sifreTekrar:[""],
  });
  }

  kayitEkraninaGit() {
    this.router.navigate(['/giris']);
  }

  kullaniciOlustur(){
      const kullanici:DTOKullanici={
        adi: this.frm.value.adi,
        email: this.frm.value.email,
        sifre: this.frm.value.sifre,
        sifreTekrar:this.frm.value.sifreTekrar
      }
      debugger
      console.log(this.frm.value);
      this.kullaniciHttpClient.create(kullanici);
   }


}
