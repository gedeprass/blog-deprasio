#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script untuk memudahkan penambahan gambar ke post 100daycode
 * Usage: node scripts/add-image.js [day-number] [image-name]
 * Example: node scripts/add-image.js 15 my-screenshot
 */

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log('❌ Usage: node scripts/add-image.js [day-number] [image-name]');
    console.log('Example: node scripts/add-image.js 15 my-screenshot');
    process.exit(1);
}

const dayNumber = args[0];
const imageName = args[1];

// Paths
const publicImagesDir = path.join(__dirname, '../public/images/100daycode');
const imagePath = path.join(publicImagesDir, `${imageName}.png`);

// Check if image exists
if (!fs.existsSync(imagePath)) {
    console.log(`⚠️  Warning: Image not found at ${imagePath}`);
    console.log('📁 Please place your image in the public/images/100daycode/ directory');
    console.log(`📝 Expected filename: ${imageName}.png`);
}

// Generate markdown image code
const markdownImage = `![Day ${dayNumber} - ${imageName}](../../public/images/100daycode/${imageName}.png)

*📸 Screenshot Day ${dayNumber} - ${imageName}*`;

console.log('\n🎉 Image code generated!');
console.log('\n📋 Copy this code to your markdown file:');
console.log('\n' + '='.repeat(50));
console.log(markdownImage);
console.log('='.repeat(50));

// Generate file path for easy copying
const relativePath = `/images/100daycode/${imageName}.png`;
console.log(`\n📁 Image path: ${relativePath}`);

// Check if day file exists
const dayFile = path.join(__dirname, `../content/100daycode/day-${dayNumber.padStart(2, '0')}.md`);
if (fs.existsSync(dayFile)) {
    console.log(`✅ Day ${dayNumber} file found: day-${dayNumber.padStart(2, '0')}.md`);
} else {
    console.log(`⚠️  Day ${dayNumber} file not found. Create it first!`);
}

console.log('\n💡 Tips:');
console.log('- Use descriptive image names (e.g., "flexbox-layout", "css-grid-example")');
console.log('- Keep images under 1MB for better performance');
console.log('- Use PNG format for screenshots with text');
console.log('- Use JPG format for photos or complex graphics'); 