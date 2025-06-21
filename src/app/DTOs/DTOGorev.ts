import { enumDurum } from "../enums/enumDurum";

export class DTOGorev{
    id?:number|null;
    baslik:string;
    baslangicTarihi:Date;
    bitisTarihi:Date;
    durum:enumDurum;
    konu:string;
    kullaniciId?:number|null;
}