---
id: optimize
title: Ne Kadar Optimize
---

Igniter geliştirilirken her bir kod parçasini veya en ufak iş yapan bir methodu bile elimizden geldiği kadar optimize ettik. **Hiç bir iş yükünden kaçinmadik!**

## Lua Optimizasyon

**Refactoring** yaptiğimiz bütün sistemler üzerinde **Lua 5.4.4** standartlarina göre lokalizasyon gibi ilkelere özen gösterdik. Ayrica **const** sabitleri gibi 5.4.4 standartlarina uygun keywordlari kullaniyoruz..

## Fivem Optimizasyon
Fivem ve qb-core commnity tarafindan uygulanan bütün optimizasyon 
tavsiyelerini yerine getiriyoruz. Gereksiz thread kullanimini en aza indiriyoruz. Bekleme sürelerini script bazinda kontrol ediyoruz. İş parçaciği sürelerini oldukça optimize etmeye çaliştik. Bir kod parçasi üzerinde bir çok kontrol yaparak hataya sebebiyet verecek her şeyi minimize etmeye çaliştik.

## **Örnekler**

## **Sistem içerisinde olan bütün sistemleri tek tek ayirip düzenliyoruz**

**Örnekteki gibi bütün iş parçaciği olan fonksiyonlari "localize" ediyoruz.
Lua programlama dili bu tarz fonskiyonlari daha hizli bir şekilde okuyor.**

![Settings Window](https://i.ibb.co/D5zF8xG/Screenshot-4.png)

**Ayni zamanda "sleep=1000" gibi atama yöntemleri sayesinde her hangi bir Threadi kontrol edebiliyoruz. Bu tarz ufak optimize yöntemlerini paketin her yerinde kullanmaya çaliştik geri dönüşlerinden oldukça memnun kaldik!**

![Settings Window](https://i.ibb.co/dPZNhzJ/Screenshot-5.png)