# 📚 100DayCode Workflow Guide

## 🎯 **Tujuan**
Workflow ini dirancang untuk memudahkan penambahan konten 100daycode dengan tampilan yang konsisten dan mudah dibaca.

---

## 📝 **Alur Kerja Menambah Post Baru**

### 1. **Buat File Post Baru**
```bash
# Copy template
cp content/100daycode/template.md content/100daycode/day-XX.md

# Edit file sesuai kebutuhan
code content/100daycode/day-XX.md
```

### 2. **Struktur Post yang Direkomendasikan**
```markdown
---
external: false
draft: false
title: "Day X – [Judul Tantangan]"
description: "[Deskripsi singkat]"
date: 2025-XX-XX
---

# 🚀 Day X – [Judul Tantangan]

> **Tantangan Hari Ini:** [Deskripsi tantangan]

---

## 📚 **Yang Dipelajari Hari Ini**
### ✅ **[Kategori]**
- [ ] [Poin pembelajaran]

## 💻 **Code Examples**
```[language]
// Kode contoh
```

## 🖼 **Screenshot Hari Ini**
[Gunakan script add-image.js]

## 🎯 **Rencana Besok**
- [ ] [Tugas]

## 💡 **Reflection**
[Refleksi pembelajaran]

---

*📅 **Tanggal:** [Tanggal]*  
*⏱️ **Waktu Belajar:** [X jam]*  
*🎯 **Progress:** X/100*
```

---

## 🖼 **Cara Menambah Gambar**

### **Metode 1: Menggunakan Script (Recommended)**
```bash
# 1. Simpan gambar di public/images/100daycode/
# 2. Jalankan script
node scripts/add-image.js 15 my-screenshot

# 3. Copy kode yang dihasilkan ke markdown file
```

### **Metode 2: Manual**
```markdown
<div class="screenshot-container">
  <img src="../../public/images/100daycode/nama-gambar.png" alt="Deskripsi gambar" class="screenshot">
  <p class="caption">📸 Caption untuk gambar</p>
</div>
```

---

## 🎨 **Styling yang Tersedia**

### **Container Classes**
- `.screenshot-container` - Container untuk screenshot dengan background dan border
- `.challenge-card` - Card untuk menampilkan tantangan
- `.progress-bar` - Progress bar untuk tracking

### **Text Styling**
- `> **Tantangan Hari Ini:**` - Quote styling untuk tantangan
- `## 📚 **Yang Dipelajari**` - Section headers dengan emoji
- `### ✅ **[Kategori]**` - Subsection dengan checkbox emoji

### **Code Blocks**
- Syntax highlighting otomatis
- Border dan shadow styling
- Responsive design

---

## 📋 **Checklist Sebelum Publish**

- [ ] **Frontmatter** lengkap (title, description, date)
- [ ] **Struktur** mengikuti template
- [ ] **Gambar** sudah ditambahkan dengan class yang benar
- [ ] **Code examples** sudah di-highlight dengan benar
- [ ] **Progress** sudah diupdate (X/100)
- [ ] **Reflection** sudah ditulis
- [ ] **Rencana besok** sudah dibuat

---

## 🚀 **Tips untuk Tampilan yang Lebih Bagus**

### **1. Gunakan Emoji dengan Konsisten**
- 🚀 untuk judul utama
- 📚 untuk section pembelajaran
- 💻 untuk code examples
- 🖼 untuk screenshot
- 🎯 untuk rencana
- 💡 untuk reflection

### **2. Struktur yang Jelas**
- Gunakan heading hierarchy yang benar (H1 → H2 → H3)
- Pisahkan section dengan `---`
- Gunakan bullet points untuk list

### **3. Gambar yang Optimal**
- Resolusi: 1200px width untuk screenshot
- Format: PNG untuk screenshot, JPG untuk foto
- Size: < 1MB untuk performa
- Alt text: Deskriptif dan informatif

### **4. Code Examples**
- Gunakan syntax highlighting yang tepat
- Tambahkan komentar untuk penjelasan
- Keep it simple dan fokus

---

## 🔧 **Troubleshooting**

### **Gambar Tidak Muncul**
1. Cek path gambar: `../../public/images/100daycode/`
2. Pastikan file ada di folder yang benar
3. Cek nama file (case sensitive)

### **Styling Tidak Berfungsi**
1. Pastikan class CSS sudah ditambahkan
2. Restart dev server: `npm run dev`
3. Clear browser cache

### **Markdown Tidak Render**
1. Cek syntax markdown
2. Pastikan tidak ada karakter khusus
3. Gunakan backticks untuk code

---

## 📚 **Referensi**

- [Markdown Guide](https://www.markdownguide.org/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Astro Documentation](https://docs.astro.build/)

---

*💡 **Pro Tip:** Gunakan template dan script untuk konsistensi dan efisiensi!* 