
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Eco-Commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Eco-Commerce/login",
    "route": "/Eco-Commerce"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/home"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/shop"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/contact"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/blog"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/about"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/register"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/login"
  },
  {
    "renderMode": 2,
    "route": "/Eco-Commerce/checkout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19315, hash: '7e6f5ddc4cbf20d36df5b525ce139cc1a7ca5dfbf52ef4ac6fcdc44c612dc331', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '295b9d62a9e713b5ebbcda9304f871c5669d60b0c2ca860d1bcd6600a6cf9db1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 39658, hash: '4dac88e1c462b7f77a350d014bbd9d3685329146afb828cc290fe7cef948f218', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 38532, hash: '1bb80b94db6985d0d5796a0bf0d7eeb8921d3a63bc43ecd5a0c5da5aac7dcb2b', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'styles-YJM65IGT.css': {size: 247326, hash: '0cXp0KumyZs', text: () => import('./assets-chunks/styles-YJM65IGT_css.mjs').then(m => m.default)}
  },
};
