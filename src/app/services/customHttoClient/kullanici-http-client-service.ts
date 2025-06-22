import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { DTOKullanici } from '../../DTOs/DTOKullanici';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { DTOGiris } from '../../DTOs/DTOGiris';
import { DTOToken } from '../../DTOs/DTOToken';

@Injectable({
  providedIn: 'root'
})
export class KullaniciHttpClientService {

  constructor(private httpClientService:HttpClientService){}

  async get():Promise<{kullanicilar:DTOKullanici[]}>{
    const PromiseData:Promise<{kullanicilar:DTOKullanici[]}>=lastValueFrom(
    this.httpClientService.get<{kullanicilar:DTOKullanici[]}>({
    controller:"Kullanici"}));
    return await PromiseData;
    }

  async giris(kullanici: DTOGiris, successCallBack?: () => void): Promise<any> {
    const observable: Observable<any | DTOToken> = this.httpClientService.post<any | DTOToken>({
      controller: "Kullanici",
      action: "Giris"
    }, kullanici)

    const token: DTOToken = await firstValueFrom(observable) as DTOToken;
    if (token) {
      localStorage.setItem("accessToken", token.accessToken);
      localStorage.setItem("refreshToken", token.refreshToken);
    }

    successCallBack();
  }


  create(kullanici: DTOKullanici, successCallBack?: () => void){
  this.httpClientService.post({
    controller:"Kullanici",
  },kullanici).subscribe(result=>{ successCallBack()});}


  remove(id: number, successCallBack?: () => void) {
  this.httpClientService.remove<any>({controller: "Kullanici" }, id)
    .subscribe(result=>{ successCallBack()});}

  removeRange(idList: number[], successCallBack?: () => void) {
  this.httpClientService.removeRange<any>({controller: "Kullanici",action:"RemoveRange" }, idList)
    .subscribe(result=>{ successCallBack()});}
}
