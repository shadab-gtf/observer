const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'observer_logo_master_1772277615276.png');
const iconsDir = path.join(__dirname, 'public', 'icons');

console.log('Checking source:', src);
if (!fs.existsSync(src)) {
    console.error('Source file not found!');
    process.exit(1);
}

if (!fs.existsSync(iconsDir)) {
    console.log('Creating icons directory...');
    fs.mkdirSync(iconsDir, { recursive: true });
}

const targets = [
    'favicon.ico',
    'icon-192x192.png',
    'icon-512x512.png'
];

targets.forEach(target => {
    const dest = path.join(iconsDir, target);
    console.log(`Copying to ${dest}...`);
    fs.copyFileSync(src, dest);
});

console.log('All icons deployed successfully!');
