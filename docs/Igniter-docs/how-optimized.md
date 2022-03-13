---
sidebar_position: 2
---

# Ne kadar Optimize?

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

<!-- Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at `http://localhost:3000/docs/hello`.

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
-     items: [...],
+     items: ['hello'],
    },
  ],
}; -->
<!-- ``` -->
