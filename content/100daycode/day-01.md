---
external: false
draft: false
title: "Day 1 – Belajar Source Link dan Cara Memanggil Gambar dengan ./ dan ../"
description: "Hari ke-1 #100DaysOfCode: belajar dasar link, gambar, dan struktur folder di HTML."
date: 2025-07-30
---

## Day 1 – Belajar Source Link dan Cara Memanggil Gambar dengan `./` dan `../`

Hari ini aku mulai lagi dari dasar HTML. Fokusnya ke hal-hal yang sering disepelekan tapi sebenarnya penting banget: **cara bikin link**, **menampilkan gambar**, dan paling bikin bingung di awal, yaitu penggunaan `./` dan `../`.

Aku udah sering ngalamin error waktu gambar nggak muncul, atau link nggak jalan, ternyata karena path-nya salah. Sekarang mulai paham logikanya.

---

### Apa aja yang aku pelajari:
- ✅ Bikin link ke website lain (misalnya Google)
- ✅ Bikin link antar halaman di dalam website sendiri
- ✅ Tampilkan gambar pakai tag `<img>`
- ✅ Bedain kapan pakai `./` dan `../` buat manggil file

---

### Struktur folder project-nya kira-kira begini:

```
project/
│── index.html
│── images/
│   └── logo.png
│── pages/
│   ├── about.html
│   ├── service.html
│   ├── testimonial.html
│   └── contact.html
```

#### Penjelasan:
- `./` artinya **di folder yang sama**
- `../` artinya **naik satu folder ke atas**

---

### Contoh kode yang aku coba:

```html
<!-- Link ke halaman lain dalam folder yang sama -->
<a href="./about.html">About Us</a>

<!-- Link ke file di luar folder -->
<a href="../index.html">Home</a>

<!-- Tampilkan gambar -->
<img src="../images/logo.png" alt="Logo Website">
```

---

### Screenshot Hari Ini

![Day 1 Screenshot](../../public/images/100daycode/day-1.png)

---

### Target Besok
- Git Clone project blog ke lokal
- Siapkan folder khusus **100daycode**
- Mulai nulis hari ke-2 dengan hasil coding sendiri

---

Gitu dulu buat hari ini. Kelihatannya simpel, tapi bisa jadi masalah besar kalau nggak paham. Besok lanjut yang lebih seru 