---
external: false
draft: false
title: "Day 5 – Belajar tentang semantic HTML dan BEM (Block Element Modifier)"
description: "Hari ke-5 #100DaysOfCode:  Belajar tentang semantic HTML dan BEM (Block Element Modifier)"
date: 2025-08-03
---

## Day 5 – Belajar tentang semantic HTML dan BEM (Block Element Modifier)

Hari ini aku Belajar tentang semantic HTML dan BEM (Block Element Modifier)

BEM, singkatan dari Block, Element, Modifier, adalah metodologi penamaan kelas (class) dalam HTML dan CSS yang bertujuan untuk membuat struktur kode lebih terorganisir, mudah dipahami, dan dapat digunakan kembali. Dengan BEM, elemen-elemen UI dibagi menjadi blok-blok independen, dan setiap blok memiliki elemen serta pengubah yang jelas. 

Penjelasan Lebih Lanjut:
Block:
Merupakan komponen independen yang berdiri sendiri, seperti "header", "menu", atau "button".
Element:
Bagian dari blok yang tidak bisa berdiri sendiri. Contohnya, dalam blok "menu", elemennya bisa berupa "item" atau "link".
Modifier:
Digunakan untuk mengubah tampilan atau perilaku elemen. Misalnya, dalam blok "button", modifier bisa berupa "button--primary" atau "button--disabled". 


---

### Apa aja yang aku pelajari:
- bem membantu penulisan code html dan css lebih rapi
- bisa di gunakan di sass atau file dengan extension .scss

---

### Contoh penulisan code BEM-nya kira-kira begini:

```

== HTML ==
↓↓↓↓↓↓↓↓↓↓

<article class="card">
  <h2 class="card__title">Judul Artikel</h2>
  <p class="card__description">Ini adalah deskripsi singkat artikel.</p>
  <a class="card__button card__button--primary" href="#">Baca Selengkapnya</a>
</article>

== CSS ==
↓↓↓↓↓↓↓↓↓

.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.card__title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.card__description {
  font-size: 1rem;
  color: #555;
}

.card__button {
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
}

.card__button--primary {
  background-color: blue;
  color: white;
}


```

#### Penjelasan:


---

- Kita bikin 1 kartu artikel dengan struktur yang rapi.

- Menggunakan BEM supaya nama class nggak tabrakan dan mudah dibaca.

- Mudah ditambah style baru nanti, misal card--highlighted atau card__button--secondary.




---

#### Kelebihan BEM:

- Struktur rapi dan konsisten.

- Mudah dipahami tim lain.

- Kecil kemungkinan konflik class.

- Cocok untuk project skala menengah-besar.

---




---

### Target Besok 4 agustus 2025
-  set up rencana jadwal review mingguan

---

Gitu dulu buat hari ini. Kelihatannya simpel, tapi bisa jadi masalah besar kalau nggak paham. Besok lanjut yang lebih seru 