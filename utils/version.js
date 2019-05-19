let fs = require('fs');
let path = require('path');

let file = fs.readFileSync(path.join(__dirname, '..', 'package.json'));

file = file.toString('utf8');

let version = file.match(new RegExp('"version": "[0-9]+.[0-9]+.[0-9]+"', "g"))[0];

version = version.match(new RegExp("[0-9]+.[0-9]+.[0-9]+", 'g'))[0].split('.');

version[2] = Number(version[2]) + 1;

version = `"version": "${version.join('.')}"`;

file = file.replace(new RegExp('"version": "[0-9]+.[0-9]+.[0-9]+"', 'g'), version);

fs.writeFileSync(path.join(__dirname, '..', 'package.json'), file, {
    encoding: 'utf8'
});

console.log("Upgrade version: ", version);