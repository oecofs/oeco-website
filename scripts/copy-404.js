import fs from 'fs';

if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'dist/404.html');
  console.log('SPA 404.html copied successfully for GitHub Pages routing.');
} else {
  console.warn('dist/index.html not found, skipping 404.html copy.');
}
