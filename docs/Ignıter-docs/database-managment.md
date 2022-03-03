---
sidebar_position: 3
---

# Veritabanı

Igniter klasik **XAMPP** yapısından farklı olarak **MariaDb** tercih eder.

![Settings Window](https://www.hostnextra.com/kb/wp-content/uploads/2021/04/how-to-install-mariadb-on-centos.jpg)

## MariaDb Nedir?

Mariadb günümüzde en popüler ilişkisel veritabanı sistemlerinden birisidir.
Tamamen açık kaynak olarak kullanılır ve MySQL code baseini kullanır.

## Neden MariaDb ?

Igniter projesini geliştirirken veritabanının hızlı çalışması bizim için gerçekten çok önemliydi. Özellikle **150+ oyuncuya** sahip roleplay serverların'da yavaş çalışan bir veritabanının sizi oldukça rezil edebileceğini düşünüyoruz. Ayrıca kullandığımız MariaDb sürümü Ignıter'a sahip olan herkese modifiyeli bir şekilde kurulum yapılacaktır.


![Settings Window](https://i.ibb.co/tz8Lxy9/440cbac137727f9a7becfcbf03214613e472d732.png)

## Oxmysql

Ignıter üzerinde mysql-async/ghmattimysql veya benzeri sistemleri kullanmıyoruz.
Bütün alt yapı en güncel şekilde geliştirilen oxymsql alt yapısı ile kullanılıyor. oxmysql performansa odaklı **node-mysql2** ile geliştirilmiş en güncel sistemdir!

## Uzaktan erişim

MariaDb sayesinde veritabanınıza uzak bir bilgisayarda veya istediğiniz her hangi bir yerden bağlanıp datalarını görüntüleyebilirsiniz...

## Örnek Query ve Mysql Ayarları

:::danger server.cfg

**Connection string ve diğer mysql ayarları**



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
