import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { KullaniciHttpClientService } from '../../services/customHttoClient/kullanici-http-client-service';
import { DTOGiris } from '../../DTOs/DTOGiris';
import { AuthService } from '../../services/auth-service';



@Component({
  selector: 'app-giris',
  imports: [ReactiveFormsModule, MatButtonModule,MatDialogContent,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,FormsModule],
  templateUrl: './giris.html',
  styleUrl: './giris.css'
})

export class Giris {
  epostaFormControl = new FormControl('', [Validators.required, Validators.email]);
  sifreFormControl = new FormControl('', [Validators.required]);
  frm:FormGroup;
  
  constructor(private router: Router,private formBuilder:FormBuilder,private kullaniciHttpClient:KullaniciHttpClientService,private authService:AuthService) {
    this.frm=formBuilder.group({
    adi:[""],
    email:[""],
    sifre:[""],
    sifreTekrar:[""],
  });

  }

  kayitEkraninaGit() {
    this.router.navigate(['/kayit']);
  }

 girisYap(){
      const kullanici:DTOGiris={
        email: this.frm.value.email,
        sifre: this.frm.value.sifre,
      }
      this.kullaniciHttpClient.giris(kullanici,()=>{
        this.authService.identityCheck();
        this.router.navigate(['/gorevListesi']);
      });
   }
    

}
