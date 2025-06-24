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

  async get(): Promise<{ gorevler: DTOGorev[] }> {
		const promiseData: Promise<{ gorevler: DTOGorev[] }> = lastValueFrom(
			this.httpClientService.get<{ gorevler: DTOGorev[] }>({
			controller: "Gorev",
			withCredentials: true 
			})
		);

		return await promiseData;
		}


	async getWhere(baslik?:string,basTarih?:Date,bitTarih?:Date,durum?:enumDurum):Promise<{gorevler:DTOGorev[]}>{
		let queryString = "";
		if (baslik) {
			queryString += `baslik=${baslik}`;
		}
		if (String(basTarih) != 'Invalid Date') {
			queryString += `${queryString.length > 0 ? "&" : ""}basTarih=${basTarih}`;
		}
		if (String(bitTarih) != 'Invalid Date') {
			queryString += `${queryString.length > 0 ? "&" : ""}bitTarih=${bitTarih}`;
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

	async post(gorev: DTOGorev, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void){
	this.httpClientService.post({
		controller:"Gorev",
	},gorev)
	.subscribe({
		next: result => {
			if (successCallBack) successCallBack();
		},
		error: err => {
			console.error('Hata oluştu:', err);
			if (errorCallBack) errorCallBack(err);
		}
		});
	}

	async put(gorev: DTOGorev, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void){
	this.httpClientService.put({
		controller:"Gorev",
	},gorev)
	.subscribe({
		next: result => {
			if (successCallBack) successCallBack();
		},
		error: err => {
			console.error('Hata oluştu:', err);
			if (errorCallBack) errorCallBack(err);
		}
		});
}

	remove(id: number, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
	this.httpClientService.remove<any>({controller: "Gorev" }, id)
		.subscribe({
		next: result => {
			if (successCallBack) successCallBack();
		},
		error: err => {
			console.error('Hata oluştu:', err);
			if (errorCallBack) errorCallBack(err);
		}
		});
	}

	removeRange(idList: number[], successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
	this.httpClientService.removeRange<any>({controller: "Gorev",action:"RemoveRange" }, idList)
		.subscribe({
		next: result => {
			if (successCallBack) successCallBack();
		},
		error: err => {
			console.error('Hata oluştu:', err);
			if (errorCallBack) errorCallBack(err);
		}
		});
	}
}
