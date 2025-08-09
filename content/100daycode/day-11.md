---
external: false
draft: false
title: "Day 11 – Masalah dan Solusi dalam Kondisional "
date: 2025-08-09
---

## Day 11 – Masalah dan Solusi dalam Kondisional

Hari ini saya melanjutkan eksplorasi perbandingan dan logika, tetapi lebih fokus pada kesalahan umum dan praktik terbaik. Saya belajar bahwa detail kecil bisa membuat perbedaan besar dalam kode.

## Pembelajaran Penting:

1. Kesalahan Operator: Saya menyadari kesalahan umum seperti salah menulis operator (=> alih-alih >=), yang menyebabkan kode tidak berjalan sesuai harapan dan bahkan menghasilkan undefined.

2. Pentingnya return: Saya belajar bahwa fungsi akan mengembalikan undefined jika tidak ada pernyataan return yang dieksekusi. Ini menjadi penyebab mengapa salah satu fungsi saya tidak memberikan hasil yang diinginkan.

3. Penggunaan === vs ==: Saya memahami perbedaan mendalam antara == (non-strict equality) yang melakukan konversi tipe data, dan === (strict equality) yang tidak. Saya akan membiasakan diri menggunakan === untuk menghindari bug yang tidak terduga.

## Contoh Kode yang Direvisi:
Saya menguji pemahaman dengan fungsi cekKelayakan dan berhasil memperbaikinya. Saya juga belajar untuk menyingkat kode if/else yang mengembalikan true atau false.

// Versi ringkas dari fungsi cekKelayakan
function cekKelayakan(usia, statusPernikahan) {
  return usia >= 21 && statusPernikahan === "Sudah Menikah";
}

// Pengujian kode
console.log(cekKelayakan(25, "Sudah Menikah"));    // true
console.log(cekKelayakan(30, "Belum Menikah"));    // false

## Kesimpulan:
Meskipun terlihat sepele, penulisan operator dan penggunaan return yang tepat sangat krusial. Saya juga mulai mengadopsi praktik coding yang lebih bersih dan efisien dengan menyingkat beberapa logika kondisional.


```


```
