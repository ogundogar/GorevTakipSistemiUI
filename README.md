# GorevTakipSistemiUI


## Angular CLI Kurulumu
Eğer bilgisayarda Angular CLI (Angular komut satırı aracı) yüklü değilse, global olarak yüklemek için:
```bash
npm install -g @angular/cli
```
Not: Nodejs'in kurulu olduğundan emin olun!

## Proje Bağımlılıklarını Yükle
npm paketlerini indir:
```bash
npm install
```
Bu komut package.json içindeki tüm bağımlılıkları yükler.

##Projeyi Çalıştır
Projeyi yerel sunucuda çalıştırmak için:
```bash
ng serve --ssl
```
HTTPS protokolünde çalıştırıyoruz.

Not: API tarafına yapılan isteklerde problem yaşanması durumunda http-client-service.ts dosyası ve app.config.ts dosyalarındaki url adreslerini kontrol ediniz.
