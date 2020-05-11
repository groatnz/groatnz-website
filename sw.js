/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/3a53dfab5f39e6ada5d1b140bdbaa6a77e778f95.5bbdc593d9d01ec616ca.js",
    "revision": "46ad68ebec6f4114548b720bf851cabf"
  },
  {
    "url": "/_next/static/chunks/framework.934881a8a2d3672acc22.js",
    "revision": "8dbfd54516c12914d3e0cd417cd67882"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/_app.js",
    "revision": "0b48eef32f2fb341d8563c7b0aa10c64"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/_error.js",
    "revision": "c56a093b4c5db1cd49aa0736b3a3a85e"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/index.js",
    "revision": "b10bdf365522469d7258057610e4c55c"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/quotes.js",
    "revision": "a225925f38a708534023c4947937805a"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/resume.js",
    "revision": "81738b0cffeb718d17e2bbc78198ef32"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/sfia-skills.js",
    "revision": "89cc0813eacd89b49bd287ec3aaa6515"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/tech-skills.js",
    "revision": "641ad29eedb53182d741ebe5230434b7"
  },
  {
    "url": "/_next/static/oGAQjZy0zOesMAM1xSlst/pages/timeline.js",
    "revision": "5bee926be36109736877edd868228d96"
  },
  {
    "url": "/_next/static/runtime/main-378ad59ce36a06873042.js",
    "revision": "485a90d0c307e7033cde748e221ee851"
  },
  {
    "url": "/_next/static/runtime/polyfills-16ccf9440fd1c9275fd4.js",
    "revision": "f6832bdfcecd382f46a3d81235590c4d"
  },
  {
    "url": "/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",
    "revision": "f5e6e2fca3144cc944812cfa3547f475"
  },
  {
    "url": "/404.html",
    "revision": "ee9e9e204e89c23149ca2d8e1064ba6d"
  },
  {
    "url": "/index.html",
    "revision": "2e1cddd79f6ec571bdb486c42afdfaaf"
  },
  {
    "url": "/quotes.html",
    "revision": "29d30d1f373b2776112569fd45607b98"
  },
  {
    "url": "/resume.html",
    "revision": "4af93784b70b5b9475689cc4ebf84ea7"
  },
  {
    "url": "/sfia-skills.html",
    "revision": "398137c1aa4b8f954031d0749ad29f75"
  },
  {
    "url": "/static/css/hamburgers.css",
    "revision": "2aeedfb434a3ba8aa3dc175010f1bbf6"
  },
  {
    "url": "/static/images/favicon-180.png",
    "revision": "6083624a8ae0e68a575b6f328173c9a6"
  },
  {
    "url": "/static/images/favicon-192.png",
    "revision": "5638a022d4528b29d9f9e92e4ca92000"
  },
  {
    "url": "/static/images/favicon-256.png",
    "revision": "23c3185780f187e39491dad4b6d97fb9"
  },
  {
    "url": "/static/images/favicon-512.png",
    "revision": "d00498c7a7b25f29ec43f343aa78f181"
  },
  {
    "url": "/static/images/favicon.ico",
    "revision": "b0b4a82aed9ad5b0c0de958324c053ac"
  },
  {
    "url": "/static/images/hashtag.png",
    "revision": "91193c45780ff1060ccaadb81e54d2ec"
  },
  {
    "url": "/static/images/hashtag.webp",
    "revision": "b67a94418a2279fc3679f8a50bc6c356"
  },
  {
    "url": "/static/images/i_menu.png",
    "revision": "1ee97ab836e4d5073034883702b7ca51"
  },
  {
    "url": "/static/images/logo_white.png",
    "revision": "ee6cac2e4c4d1fe6daf29c216cee09d0"
  },
  {
    "url": "/static/images/logo.png",
    "revision": "e9a56e79ac434368ff632af193a3e3da"
  },
  {
    "url": "/static/images/ogimage.png",
    "revision": "92ea39600713234443ae29a0421956d0"
  },
  {
    "url": "/tech-skills.html",
    "revision": "19ae9c239512436d92438ab7039b23c3"
  },
  {
    "url": "/timeline.html",
    "revision": "f6e91977ec3fc8a988838b9f37e233db"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
