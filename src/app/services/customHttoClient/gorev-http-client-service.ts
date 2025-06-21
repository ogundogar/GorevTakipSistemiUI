import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { lastValueFrom } from 'rxjs';
import { enumDurum } from '../../enums/enumDurum';
import { DTOGorev } from '../../DTOs/DTOGorev';

@Injectable({
  providedIn: 'root'
})
export class GorevHttpClientService {

  constructor(private httpClientService:HttpClientService){}

  async get():Promise<{gorevler:DTOGorev[]}>{
  
		const PromiseData:Promise<{gorevler:DTOGorev[]}>=lastValueFrom(
		this.httpClientService.get<{gorevler:DTOGorev[]}>({
		controller:"Gorev"}));
		return await PromiseData;
	  }

	async getWhere(baslik?:string,baslangicTarihi?:Date,bitisTarihi?:Date,durum?:enumDurum):Promise<{gorevler:DTOGorev[]}>{
		let queryString = "";
		if (baslik) {
			queryString += `baslik=${baslik}`;
		}
		if (String(baslangicTarihi) != 'Invalid Date') {
			queryString += `${queryString.length > 0 ? "&" : ""}baslangicTarihi=${baslangicTarihi}`;
		}
		if (String(bitisTarihi) != 'Invalid Date') {
			queryString += `${queryString.length > 0 ? "&" : ""}bitisTarihi=${bitisTarihi}`;
		}
		if (durum!=null) {
			queryString += `${queryString.length > 0 ? "&" : ""}durum=${durum}`;
		}
		const PromiseData:Promise<{gorevler:DTOGorev[]}>=lastValueFrom(
		this.httpClientService.get<{gorevler:DTOGorev[]}>({
		controller:"Gorev",
		action: "GetWhere",
		queryString:queryString
	}));
		return await PromiseData;
	  }

	create(gorev: DTOGorev, successCallBack?: () => void){
	this.httpClientService.post({
		controller:"Gorev",
	},gorev).subscribe(result=>{ successCallBack()});}

	put(gorev: DTOGorev, successCallBack?: () => void){
	this.httpClientService.put({
		controller:"Gorev",
	},gorev).subscribe(result=>{ successCallBack()});}

	remove(id: number, successCallBack?: () => void) {
	this.httpClientService.remove<any>({controller: "Gorev" }, id)
		.subscribe(result=>{ successCallBack()});}

	removeRange(idList: number[], successCallBack?: () => void) {
	this.httpClientService.removeRange<any>({controller: "Gorev",action:"RemoveRange" }, idList)
		.subscribe(result=>{ successCallBack()});}
}
