if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const c=e=>r(e,n),o={module:{uri:n},exports:l,require:c};s[n]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(a(...e),l)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.a1848c47.css",revision:null},{url:"_app/immutable/assets/favicon.00dcf1c8.avif",revision:null},{url:"_app/immutable/assets/posts.f3b701f6.css",revision:null},{url:"_app/immutable/chunks/footer.2f083871.js",revision:null},{url:"_app/immutable/chunks/github.0a054d11.js",revision:null},{url:"_app/immutable/chunks/icon.ed6cf7a0.js",revision:null},{url:"_app/immutable/chunks/index.1bfe2637.js",revision:null},{url:"_app/immutable/chunks/index.b10b968e.js",revision:null},{url:"_app/immutable/chunks/post_layout.03be8d31.js",revision:null},{url:"_app/immutable/chunks/posts.fc577ad2.js",revision:null},{url:"_app/immutable/chunks/preload-helper.a4192956.js",revision:null},{url:"_app/immutable/chunks/scheduler.55c863de.js",revision:null},{url:"_app/immutable/chunks/singletons.26306115.js",revision:null},{url:"_app/immutable/chunks/stores.62526f86.js",revision:null},{url:"_app/immutable/chunks/you-tube.2b00ca2e.js",revision:null},{url:"_app/immutable/entry/app.acfc6ee1.js",revision:null},{url:"_app/immutable/entry/start.4e2bcf7b.js",revision:null},{url:"_app/immutable/nodes/0.c41f3416.js",revision:null},{url:"_app/immutable/nodes/1.346737a5.js",revision:null},{url:"_app/immutable/nodes/2.a8f045b9.js",revision:null},{url:"_app/immutable/nodes/3.1bce159b.js",revision:null},{url:"_app/immutable/nodes/4.2b6a409d.js",revision:null},{url:"_app/immutable/nodes/5.0a8560d6.js",revision:null},{url:"_app/immutable/nodes/6.550f3682.js",revision:null},{url:"_app/immutable/nodes/7.7863a89b.js",revision:null},{url:"_app/immutable/nodes/8.7b178d39.js",revision:null},{url:"_app/immutable/nodes/9.36dbb381.js",revision:null},{url:"assets/77905046_p0.png",revision:"2c84d44d8eff4f61638342009f91ca63"},{url:"assets/91131573_p0_master1200.png",revision:"1248540ea2b750fbe34909f62585a858"},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/leapmotion/banner.png",revision:"fa8140b3cc3a5b32e7810a445375eac3"},{url:"assets/leapmotion/leapmotionseminar(1).png",revision:"2c5e8ff79eb2669391bef4f95580d196"},{url:"assets/leapmotion/leapmotionseminar(2).png",revision:"7bea75ceb7788e7fc83c995a3ef655b3"},{url:"assets/leapmotion/leapmotionseminar(3).png",revision:"74d25c424444d4da39ffd3178eb7377a"},{url:"assets/leapmotion/leapmotionseminar(4).png",revision:"4c895b741f037d3ae38a574bb5c1cde8"},{url:"assets/leapmotion/leapmotionseminar(5).png",revision:"46e3413d8ce538f2160296644aaa9586"},{url:"assets/maskable@192.png",revision:"204492b7a1799c9c26d44e7315914bb7"},{url:"assets/maskable@512.png",revision:"0ddcc48ef3c7fe66b3046e6159cf6ffb"},{url:"assets/smartwatchremotecontrol.png",revision:"ec8f1f1c27d41e32a56112907342f2c2"},{url:"assets/waifugenerator/clickyui(1).png",revision:"878443955a4ebe1461fb836014c38200"},{url:"assets/waifugenerator/clickyui(2).png",revision:"44d7ddb2066e36d28251feb0ffd8b00a"},{url:"assets/waifugenerator/clickyui(3).png",revision:"ac58cd2d1a4e65096cbd5be3a8d80ae6"},{url:"assets/waifugenerator/clickyui(4).png",revision:"19600abe9ac06593b0f8349c5d06d129"},{url:"assets/wikipedia_(1).png",revision:"bd358356d05b543ad8cbdce9064658ee"},{url:"assets/wikipedia_(2).png",revision:"97646ecc17e3318097d0aab4aa31e7e5"},{url:"assets/wikipedia_(3).png",revision:"a856579ee04101c8594118eac08d4e5f"},{url:"assets/wikipedia_(4).png",revision:"24cb6f8132bf25a097fb5dcb6c407bd3"},{url:"assets/wikipedia_(5).png",revision:"4be579f1c92d4935fe7f65dcd93abc75"},{url:"assets/wikipedia_(6).png",revision:"e46fbd40a61f3827a8d4f041b536001f"},{url:"assets/wikipedia_(7).png",revision:"282f611126be3a0fdafa2bb0936de882"},{url:"assets/wikipedia_(8).png",revision:"b1a3e5907431e665319463dd655a4ca1"},{url:"assets/wikipedia_(9).png",revision:"8d6f7a7f8dc4de0852f82c4a37160590"},{url:"assets/wikispace_banner.png",revision:"c0149d1c10d5623d76f11370601c313b"},{url:"favicon.png",revision:"137640ce164cb27fe96170080632de13"},{url:"server/_app/immutable/assets/_layout.98935869.css",revision:null},{url:"server/_app/immutable/assets/favicon.00dcf1c8.avif",revision:null},{url:"server/_app/immutable/assets/posts.f3b701f6.css",revision:null},{url:"server/chunks/footer.js",revision:"56ffe3c36c2e8770fcf36a081a1e52ed"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"893414de8396032ec32d7b96ae95395c"},{url:"server/chunks/index.js",revision:"db779c93def37b9dd70f234e62358ca6"},{url:"server/chunks/index2.js",revision:"8ebae786535102fbe234640fd4f6ebcc"},{url:"server/chunks/internal.js",revision:"05276c65bdef1f6d0935a2048b59aa04"},{url:"server/chunks/posts.js",revision:"240244db23fd427d009795ae988841b1"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"38f24266c1431dc20350062c31a87239"},{url:"server/chunks/ssr.js",revision:"c87514480f0e8d9bfd6a705e93f0f190"},{url:"server/chunks/stores.js",revision:"3cde2d72b65553bd5f2154a05c9f0e78"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"9d652fd81c5d5e41cef548531c9a713d"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"213c6c6bcf86f503a4f3939acfc0e38d"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"cac5ff7dd4676b4033b07a59525b551e"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"3680e786c090c488e5c4d8330cc5ea51"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"3f706ebd4a24dd69c56d0f0efa797aab"},{url:"server/entries/fallbacks/error.svelte.js",revision:"872888901dc3cf741c337a764cc7f3bd"},{url:"server/entries/pages/_layout.svelte.js",revision:"2a4780e7c644fc3bc270cea82146f719"},{url:"server/entries/pages/_layout.ts.js",revision:"2263b7579c01ba9bff61b1d1fb5120ae"},{url:"server/entries/pages/_page.svelte.js",revision:"861d3feb77b78fb4de3b86b7cc78cd07"},{url:"server/entries/pages/projects/leapmotionseminar/_page.svelte.md.js",revision:"8982c3558ef99616f912a31f547573db"},{url:"server/entries/pages/projects/routeboxer/_page.svelte.md.js",revision:"a1250cbc7f70b4e4992fd04c3eed2788"},{url:"server/entries/pages/projects/smartwatchasremotecontrol/_page.svelte.md.js",revision:"53fb189fb03f8ab08437c8bbb366bc3d"},{url:"server/entries/pages/projects/waifugenerator/_page.svelte.md.js",revision:"0bf3bcd62a425ce72106c1c5fbe46279"},{url:"server/entries/pages/projects/wikispace/_page.svelte.md.js",revision:"6ca01d8f96182de5e9349f999f222595"},{url:"server/entries/pages/resume/_page.md.js",revision:"6acbd723d57547346f20e6464cf5c989"},{url:"server/entries/pages/welcome/_page.md.js",revision:"362a14181c62e2d2d1ccdab23ecf63ce"},{url:"server/index.js",revision:"8ceb9921c1797f4edd7f2f84be90fd24"},{url:"server/internal.js",revision:"3844e499e60d526c6664c1c777b19618"},{url:"server/manifest-full.js",revision:"27d25552b341fea1e0534dc56cceadf1"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"},{url:"server/nodes/8.js",revision:"bdc52451b2c36e8b730bd7a48718204d"},{url:"server/nodes/9.js",revision:"8e755d984cb8a89877bc64ff812e3169"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));