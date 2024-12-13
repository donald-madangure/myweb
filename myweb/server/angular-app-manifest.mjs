
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://donald-madangure.github.io/myweb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://donald-madangure.github.io/myweb"
  }
],
  assets: {
    'index.csr.html': {size: 542, hash: '7f283375cf03a7ca1a95302a1aa405180baece871fe2c3c0af7d22b16f69afc7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '3ef2b97049850eaef05673140dca45f9ffd27a939a4ad65fe684762f5f034bb3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20877, hash: '03d83fb63d2b307a6386a86076e3509499e57a67c39ef63a76ad7215fc74587d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
