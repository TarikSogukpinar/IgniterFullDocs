---
id: veritabanı
title: Veritabanı
---


Igniter klasik **XAMPP** yapisindan farkli olarak **MariaDb** tercih eder.

![Settings Window](https://www.hostnextra.com/kb/wp-content/uploads/2021/04/how-to-install-mariadb-on-centos.jpg)

## MariaDb Nedir?

Mariadb günümüzde en popüler ilişkisel veritabani sistemlerinden birisidir.
Tamamen açık kaynak olarak kullanılır ve MySQL code baseini kullanir.

## Neden MariaDb ?

Igniter projesini geliştirirken veritabaninin hizli çalişmasi bizim için gerçekten çok önemliydi. Özellikle **150+ oyuncuya** sahip roleplay serverlarin'da yavaş çalışan bir veritabanının sizi oldukça rezil edebileceğini düşünüyoruz. Ayrica kullandiğimiz MariaDb sürümü Igniter'a sahip olan herkese modifiyeli bir şekilde kurulum yapilacaktir.


![Settings Window](https://i.ibb.co/tz8Lxy9/440cbac137727f9a7becfcbf03214613e472d732.png)

## Oxmysql

Igniter üzerinde mysql-async/ghmattimysql veya benzeri sistemleri kullanmıyoruz.
Bütün alt yapi en güncel şekilde geliştirilen oxymsql alt yapısı ile kullanılıyor. oxmysql performansa odakli **node-mysql2** ile geliştirilmiş en güncel sistemdir!

## Uzaktan erişim

MariaDb sayesinde veritabanınıza uzak bir bilgisayarda veya istediğiniz her hangi bir yerden bağlanıp datalarini görüntüleyebilirsiniz...

## Örnek Query ve Mysql Ayarlari

:::danger server.cfg

**Connection string ve diğer mysql ayarlari**



:::
```text title=
// highlight-start

# Database configuration
set mysql_connection_string "mysql://root:password@localhost/igniter?charset=utf8mb4"
set mysql_slow_query_warning 100
set mysql_debug "true"
set mysql_transaction_isolation_level 2

// highlight-end

```
