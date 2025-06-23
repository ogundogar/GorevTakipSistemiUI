import { enumDurum } from "../enums/enumDurum";

export class DTOGorev{
    id?:number|null;
    baslik:string;
    basTarih:Date;
    bitTarih:Date;
    durum:enumDurum;
    konu:string;
    kullaniciId?:number|null;
}