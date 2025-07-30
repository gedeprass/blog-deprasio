#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script untuk update harian 100daycode
 * Usage: node scripts/daily-update.js [day-number] [title] [description]
 * Example: node scripts/daily-update.js 15 "CSS Grid Layout" "Belajar CSS Grid untuk layout yang fleksibel"
 */

const args = process.argv.slice(2);

if (args.length < 3) {
    console.log('❌ Usage: node scripts/daily-update.js [day-number] [title] [description]');
    console.log('Example: node scripts/daily-update.js 15 "CSS Grid Layout" "Belajar CSS Grid untuk layout yang fleksibel"');
    process.exit(1);
}

const dayNumber = args[0];
const title = args[1];
const description = args[2];
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Generate filename
const filename = `day-${dayNumber.padStart(2, '0')}.md`;
const filepath = path.join(__dirname, `../content/100daycode/${filename}`);

// Check if file already exists
if (fs.existsSync(filepath)) {
    console.log(`⚠️  File ${filename} already exists!`);
    console.log('Do you want to overwrite it? (y/N)');
    process.exit(1);
}

// Generate content
const content = `---
external: false
draft: false
title: "Day ${dayNumber} – ${title}"
description: "${description}"
date: ${today}
---

> **Tantangan Hari Ini:** ${description}

---

## 📚 **Yang Dipelajari Hari Ini**

### ✅ **[Kategori 1]**
- [ ] [Poin pembelajaran 1]
- [ ] [Poin pembelajaran 2]
- [ ] [Poin pembelajaran 3]

### ✅ **[Kategori 2]**
- [ ] [Poin pembelajaran 1]
- [ ] [Poin pembelajaran 2]

---

## 💻 **Code Examples**

\`\`\`[language]
// Contoh kode yang dipelajari
console.log("Hello World!");
\`\`\`

---

## 🖼 **Screenshot Hari Ini**

![Day ${dayNumber} - ${title}](../../public/images/100daycode/day-${dayNumber}.png)

*📸 Screenshot Day ${dayNumber} - ${title}*

---

## 🎯 **Rencana Besok**
- [ ] [Tugas 1]
- [ ] [Tugas 2]
- [ ] [Tugas 3]

---

## 💡 **Reflection**
[Refleksi tentang apa yang dipelajari, tantangan yang dihadapi, dan insight yang didapat]

---

*📅 **Tanggal:** ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}*  
*⏱️ **Waktu Belajar:** [X jam]*  
*🎯 **Progress:** ${dayNumber}/100*

---

## 📝 **Catatan Tambahan**
- [ ] [Catatan penting 1]
- [ ] [Catatan penting 2]
- [ ] [Link referensi yang berguna]
`;

// Write file
fs.writeFileSync(filepath, content);

console.log(`✅ Created: ${filename}`);
console.log(`📁 Path: ${filepath}`);

// Git commands for daily streak
try {
    console.log('\n🔄 Running Git commands...');
    
    // Add the new file
    execSync(`git add ${filepath}`, { stdio: 'inherit' });
    console.log('✅ Added to git');
    
    // Commit with meaningful message
    const commitMessage = `feat: add day ${dayNumber} - ${title}`;
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log('✅ Committed to git');
    
    // Push to GitHub
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Pushed to GitHub');
    
    console.log('\n🎉 Daily update completed!');
    console.log('🌱 Your GitHub streak is maintained!');
    
} catch (error) {
    console.log('❌ Git operations failed. Please run manually:');
    console.log(`git add ${filepath}`);
    console.log(`git commit -m "feat: add day ${dayNumber} - ${title}"`);
    console.log('git push origin main');
}

console.log('\n💡 Next steps:');
console.log('1. Edit the file to add your actual content');
console.log('2. Add screenshot to public/images/100daycode/');
console.log('3. Update the reflection section');
console.log('4. Commit and push again if needed'); 