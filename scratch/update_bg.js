const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', 'bg-image.svg');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/fill-opacity="0\.25"/g, 'fill-opacity="0.85"');
content = content.replace(/fill-opacity="0\.2"/g, 'fill-opacity="0.85"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully restored bg-image.svg opacity to 0.85!');
