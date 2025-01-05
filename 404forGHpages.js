const fs = require('fs');
const path = require('path');

const distFolder = path.join(__dirname, 'dist/AmadeuszPortfolio/browser');
const docsFolder = path.join(__dirname, 'docs');
const indexPath = path.join(distFolder, 'index.html');
const docsPath = path.join(docsFolder, 'index.html');
const errorPagePath = path.join(distFolder, '404.html');
const errorDocsPath = path.join(docsFolder, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, errorPagePath);
  console.log('404.html created successfully in distFolder!');
} else {
  console.error('index.html not found! Build the project first.');
}

if (fs.existsSync(docsPath)) {
  fs.copyFileSync(docsPath, errorDocsPath);
  console.log('404.html created successfully in docs!');
} else {
  console.error('index.html not found!');
}
