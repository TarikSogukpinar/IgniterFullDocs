---
sidebar_position: 2
---

# Ne kadar Optimize?

Ignıter geliştirilirken her bir kod parçasını veya en ufak iş yapan bir methodu bile elimizden geldiği kadar optimize ettik. **Hiç bir iş yükünden kaçınmadık!**

## Lua Optimizasyon

**Refactoring** yaptığımız bütün sistemler üzerinde **Lua 5.4.4** standartlarına göre lokalizasyon gibi ilkelere özen gösterdik. Ayrıca **const** sabitleri gibi 5.4.4 standartlarına uygun keywordları kullanıyoruz..

## Fivem Optimizasyon
Fivem ve qb-core commnity tarafından uygulanan bütün optimizasyon 
tavsiyelerini yerine getiriyoruz. Gereksiz thread kullanımını en aza indiriyoruz. Bekleme sürelerini script bazında kontrol ediyoruz. İş parçacığı sürelerini oldukça optimize etmeye çalıştık. Bir kod parçası üzerinde bir çok kontrol yaparak hataya sebebiyet verecek her şeyi minimize etmeye çalıştık.

## **Örnekler**

## **Sistem içerisinde olan bütün sistemleri tek tek ayırıp düzenliyoruz**

**Örnekteki gibi bütün iş parçacığı olan fonksiyonları "localize" ediyoruz.
Lua programlama dili bu tarz fonskiyonları daha hızlı bir şekilde okuyor.**

![Settings Window](https://i.ibb.co/D5zF8xG/Screenshot-4.png)

**Aynı zamanda "sleep=1000" gibi atama yöntemleri sayesinde her hangi bir Threadı kontrol edebiliyoruz. Bu tarz ufak optimize yöntemlerini paketin her yerinde kullanmaya çalıştık geri dönüşlerinden oldukça memnun kaldık!**

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
