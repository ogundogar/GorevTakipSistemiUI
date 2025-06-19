import { Pipe, PipeTransform } from '@angular/core';
import { enumDurum } from '../enums/enumDurum';
@Pipe({
  name: 'pipeDurum'
})
export class PipeDurum implements PipeTransform {
  transform(gorevDurum:enumDurum): string {
    if(gorevDurum==enumDurum.devamEdiyor)
    return `Devam Ediyor`;
    else if(gorevDurum==enumDurum.iptal)
    return `İptal Edildi`;
    else if(gorevDurum==enumDurum.beklemede)
    return `Beklemede`;
    else if(gorevDurum==enumDurum.tamamlandi)
    return `Tamamlandı`;
    else
    return ``;
  }

}
