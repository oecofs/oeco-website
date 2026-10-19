import fs from 'fs';
import path from 'path';

if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'dist/404.html');
  console.log('SPA 404.html copied successfully for GitHub Pages routing.');

  // Pre-generate routes for direct GitHub Pages static hosting
  const routes = ['forms/beleza', 'historia'];
  for (const route of routes) {
    const routeDir = path.join('dist', route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync('dist/index.html', path.join(routeDir, 'index.html'));
    console.log(`Generated static route: ${route}/index.html`);
  }
} else {
  console.warn('dist/index.html not found, skipping 404.html copy.');
}
