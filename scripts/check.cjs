const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname,'..');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size,ids.length,'IDs must be unique');
assert.equal((html.match(/<h1\b/g)||[]).length,1,'Exactly one H1');
for (const [,value] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (value === '#' || /^(mailto:|https?:)/.test(value)) continue;
  if (value.startsWith('#')) assert.ok(ids.includes(value.slice(1)),`Missing anchor ${value}`);
  else assert.ok(fs.existsSync(path.join(root,value)),`Missing asset ${value}`);
}
for (const [,sheet] of fs.readFileSync(path.join(root,'styles/main.css'),'utf8').matchAll(/@import url\('\.\/([^']+)'\)/g)) assert.ok(fs.existsSync(path.join(root,'styles',sheet)),`Missing CSS ${sheet}`);
assert.ok(html.includes('mailto:info@DracoTech.com'),'Contact destination required');
for(const item of ['navigation.js','contact.js','serve.cjs','build.cjs']) new (require('node:vm').Script)(fs.readFileSync(path.join(root,'scripts',item),'utf8'),{filename:item});
console.log('PASS: local assets, anchors, unique IDs, heading, contact destination, CSS imports, JavaScript syntax.');
