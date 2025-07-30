---
external: false
draft: false
title: "Day 1 – Belajar Source Link dan Cara Memanggil Gambar dengan ./ dan ../"
description: "Hari ke-1 #100DaysCode: belajar cara membuat link, menampilkan gambar, dan memahami penggunaan ./ dan ../ untuk menghubungkan file."
date: 2025-07-30
---

## 🚀 Day 1 – Belajar Source Link dan Cara Memanggil Gambar dengan ./ dan ../

Hari ini aku mengulang lagi dasar HTML tentang **cara membuat link** dan **menampilkan gambar di halaman web**.  
Selain itu, aku juga belajar bagaimana cara menghubungkan file yang ada di folder berbeda menggunakan simbol `./` dan `../`.

Sebelumnya, aku sering bingung kapan harus pakai `./` atau `../`, tapi hari ini jadi lebih jelas.

---

### 📌 Apa yang aku pelajari hari ini
✅ Cara membuat **link ke website lain** (misalnya link ke Google).  
✅ Cara membuat **link antar halaman** di dalam website kita sendiri.  
✅ Cara menampilkan **gambar di halaman web** menggunakan tag `<img>`.  
✅ Memahami perbedaan penggunaan `./` (untuk file di folder yang sama) dan `../` (untuk file di luar folder).  

---

### 🗂 Contoh Struktur Project

Supaya lebih paham, aku membayangkan project dengan struktur seperti ini:

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

📌 **Apa gunanya `./` dan `../`?**  
- `./` → untuk menghubungkan file di **folder yang sama**.  
- `../` → untuk naik satu level ke luar folder saat ini, lalu masuk ke folder lain.  

---

### 💻 Contoh Kode

```html
<!-- Link ke file di folder yang sama -->
<a href="./about.html">About Us</a>

<!-- Link ke file yang ada di luar folder -->
<a href="../index.html">Home</a>

<!-- Menampilkan gambar -->
<img src="./images/logo.png" alt="Logo Website">
```

---

### 🖼 Screenshot Hari Ini

![Day 1 Screenshot](../../public/images/100daycode/day-1.png)

---

### 🎯 Rencana Besok
➡ Clone project blog ke komputer dan mulai menyiapkan folder **100daycode** untuk tantangan ini.  

---

💡 *Catatan:* Hari ini aku belajar lagi dasar HTML yang kelihatannya simpel, tapi sebenarnya penting banget untuk project web ke depan.
