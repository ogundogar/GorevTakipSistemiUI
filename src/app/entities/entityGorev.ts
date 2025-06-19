import { enumDurum } from "../enums/enumDurum";

export class entityGorev{
	id:number;
	baslik:string;
	baslangicTarihi:Date;
	bitisTarihi:Date;
	durum:enumDurum;
	konu:string;
}