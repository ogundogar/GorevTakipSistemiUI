import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { DTOKullanici } from '../../DTOs/DTOKullanici';
import { lastValueFrom } from 'rxjs';
import { DTOGiris } from '../../DTOs/DTOGiris';

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

  async giris():Promise<{kullanicilar:DTOGiris[]}>{
    const PromiseData:Promise<{kullanicilar:DTOGiris[]}>=lastValueFrom(
    this.httpClientService.get<{kullanicilar:DTOGiris[]}>({controller:"Kullanici",action:"Giris"}));
    return await PromiseData;
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
