const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');
fs.mkdirSync(out, { recursive: true });
for (const item of ['index.html','sitemap.xml','.nojekyll','styles','assets']) fs.cpSync(path.join(root,item), path.join(out,item), {recursive:true});
fs.mkdirSync(path.join(out,'scripts'), {recursive:true});
for (const item of ['navigation.js','contact.js']) fs.copyFileSync(path.join(root,'scripts',item),path.join(out,'scripts',item));
console.log('Static site built in dist/');
