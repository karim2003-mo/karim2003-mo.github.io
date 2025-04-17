'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e67de2519c185fda026264e10a54a142",
".git/config": "b34573350ca69d9cc9a802521b491b1c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b260a1cfb1d9e5f24f95d287bac7f6e7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de4933816f2b15ced4f2d0713e41f80b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c94cd24d61da6730b69f83213bd7a83",
".git/logs/refs/heads/main": "51c403df2bfba676dc49b0c6dbefad3f",
".git/logs/refs/remotes/origin/main": "44aff40a5344c9575fe7d0ed20ecbb1c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/b73359245de75cd4147e6bb83f88da976c6ed5": "31b9b6f696845364ae629cbd22f4ba4f",
".git/objects/06/4a4e2b792c0d68e53a206842f929989d9393f0": "9483c76f4c96a53908ca9fd12b0fb703",
".git/objects/07/5d6699443e2ed587b1e3cca5bcf5428a08d1f7": "29d499554bde44b501a376e0e2f9ec22",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/10/3ca0b27dfb0c8e50ef308abcc757f8c71551ce": "31221348edee0cb85bbee77f611881cc",
".git/objects/13/7670f3d6440faa99dc458b6f3f1122679934dc": "8a1b0be27c3c0bcaa73795e87e3e11b1",
".git/objects/14/8eaae27e53605ab0630ed38d10b02756b376f0": "d71afedc64741aef7a28bf2f20251615",
".git/objects/15/f8028f59ea5955e29ea787beaf27fef1e346b0": "d1e875ee118b956ba9c4f1b96f2e01e6",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1f/8c6cc20841485e0119f1cf5b222e97c4b0cb10": "2e96e12d338711ffeafe4a8377ec427c",
".git/objects/22/677b6ea1c9759998a53e22e52e159114c1bdeb": "4fbb3dba54ea0b69dde327ea1c3c0923",
".git/objects/27/3e5fba7ba871d4c6ddb788d018fc026624b9e8": "e9ee49d38d56c7163dcab0314db158db",
".git/objects/28/1ed984a2fb3b5b80efd81255c25c9432b6391e": "3369d5e38f54480296e06b7b7c4ea41a",
".git/objects/2a/e9531664e42afb339db1be31869b2d964522be": "2b859f852cc06c3ab3835b5db2f7d0a1",
".git/objects/2d/159ff325c402e4cfa392bb3fb7df10fd567d69": "d2a62130a4e671fe1ad9e838776b820e",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/33/09c5b2b10b3b6178a95e3f23416d24b5790ce2": "d92fa601c49369ac72a494a7a49fa4c2",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/e85527a237d68b8eebe5a48f06d81628724e54": "efdd95793520e8a95c88b0999832d5a6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/22c723cf98dc86b8850373e210ac5bdebd9575": "fb3eab6677f5c4c8e192e949db3e04cc",
".git/objects/52/c5fecc41c037212c8c2f26d2617340ecdf4032": "611fdffc08e81802462af2f0a85bb9bf",
".git/objects/56/53fc112e584886687de8864d83500aab15f306": "74dfbb0cf84c7d15c148328b3e35fb46",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/a8644ab0514385ffbb5f4d08bb246e2482b701": "af1e242a0604c6739eea89d739f75a59",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/e20e4e2bb7841f14d60a666ee7b2b89cd3500f": "fae0ff9c2cc516f18c1fbfc274f41de4",
".git/objects/63/be27022c0dfca7d0058c8abc3157cd29e89c50": "57924c42615d461b247ae02a434c420d",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/67d4c299c031f45b055e851d1c22bdbf11881f": "7e256f24fe7762cd83599caff44ac7c6",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/66/101e4712b0870068434bd4469d373eb921de99": "07dec7caf9765d23db5ec30e3043d9f9",
".git/objects/68/4f7851adbdc2ea33c97c6448f88fbc85bf931c": "a65d74cfbe86a8107f6ea23ff237c01a",
".git/objects/6f/0e18f75075172e4c4fc4040db06c295a3bf45a": "5b4820f2749fd2b057a7c238a323779a",
".git/objects/6f/879260f16821009271ea4098ffb495dbd3b98c": "bb52dd0d0f2964fe92792a9f9bfa6c18",
".git/objects/6f/eb5927a8f67b00eec58795a5532942fe0a09e8": "12376781403bf54acc5c52729ed62b32",
".git/objects/70/2b8016d1e2ae9b24a3129e67a35e79e362ae50": "9c2a8726c3b29e83fe8cc5c625880e54",
".git/objects/71/9a9a54b23e18fbbf177cd8c1f0e42d67e3ba1c": "259f8f224f7bc799af825b663490cca0",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/78/e0453bfbbc897d3ca750b10f7e69494f47a2b7": "07ff54b2ce17b64dda246b7b5c0f70bc",
".git/objects/7b/70999f621717e7b24213854c06d7b79ae1b7c2": "73d02fcca35de8a761840bf7bfe973c2",
".git/objects/7e/d949bb6388de8c3400a13bb35a5c1a5a271c93": "6f2b8f305d6e527b8d58d18c1c0b8c1b",
".git/objects/81/b22aef0f11fe0d2bdc5fa94239291ce18ecc0c": "340bb459b8fb13930c05b7b71bb9c82d",
".git/objects/83/0e4beef3a9d11f47a6e3197183da37970f16b9": "bd050bf82531a98fa1bb0be8b4bd562e",
".git/objects/85/842e0628da8aab99422bbf46959501719a4376": "6afaf66f3872912fd1c4e10be043ca8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/45402bfd5da3409538361c41c79b64b11c7ee4": "61a7ce18527d02ec8307e4d34c3a02eb",
".git/objects/89/b46a815f628baf1a9e4a8dc69070e44ef772ba": "276b1db8dea04669034d99d78477f6ea",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/97/b62907d83b87bbbc0c7c0bad5452676087938a": "5d63dbefbc0e55372da168c84ef1add6",
".git/objects/98/2eee3574ebf289c1900326a2b8051b2725d3df": "93f03dd476ce73b063a523fdbf70dacf",
".git/objects/9a/ff94099fa583f0c2710299594ea305b54e4cb8": "bbcf9b7908981243289685cf01bdc8ff",
".git/objects/a3/6eb5924eb0ee364bbf3232680b3f5326a01e3e": "53564ab198a1e8165ecae0ed2317b1e4",
".git/objects/a4/fe57e6feb621142705c360a835afb09ce7558e": "20be5aceee8ebc2ff57caf232576e6b3",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/3691ee8e4b7f96f3c2641806c1cc1f0fe12551": "e539e9320ec9a9baffa1c0c39d96a8ad",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/994f232739bf83e45bc9c14fde56576102fe4e": "8f44d3ba3f49de4ae7b0c274a4dbbcc3",
".git/objects/aa/c14e8b33eedcbb4489f4a2f8e3fd2ee6e2131b": "60eb783a5e79b3098e4685940bb66934",
".git/objects/ac/1ac235eee05762beaa174c8feb9f674b43595a": "2840e5051f82a2c684d255b5783123d8",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/ae/6adb22cf32d8850656bf71028053a6085ccba7": "669bf5f6acf1a7965410492fe1d166ad",
".git/objects/b3/633b3c7825a1b603c448fe645a18413ebb4f2b": "67dbd4119ff0b5c6e4d89079da851fe4",
".git/objects/b3/68304dc7b33fb0da1c6c44264445d5b214226a": "bfc36899f9b52a1da6696bb74b3c0e05",
".git/objects/b5/17e1d89c62c5465c4a82b62a13b8e163003a55": "83a690d7ccea1fc79ece26bf165fedc5",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4045998e2b8f554b797fed48326dd5dcf94f97": "0bb026039b2d514fe22c663dc25b41b1",
".git/objects/bc/ca138fd28659a5677cd2c498c9d086cd4d1677": "6dd8a635617a10a6c86862c01c007fb7",
".git/objects/bf/47853d294149419c7ddc588eae2724b4871411": "c2a34d35fe2c63422eeb38b375359ec6",
".git/objects/c0/fa834e49061c8085ee9372b45fcdd6b6b8156f": "ce95be495e074020a9d7bedbad82eb4d",
".git/objects/c2/aee7ab53e174ec84be165aa0fdaf459610d497": "024ca4d2787afbe66fde3e0fc4481bd3",
".git/objects/cc/5160ef36d5c39bb259f2678a1cdf55c3fbf9ce": "1d8c11ebc26273a3b9efa036743ce3ff",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5816224ddf1fdc33677b840eb2afb5fb927719": "eaa3fffd1dc043eb633de96e366861cc",
".git/objects/d8/245009c1a629473be029063b13a314a217ca16": "38a67ac146c280bc0ba2509d20438afe",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dd/f435b74193e39d2bc3920611dfaa1d7efb9c00": "cc8790808eb5b8810ae629d70bab4666",
".git/objects/e1/7c255b3ff0610ac5f13114ec893b03a98dcc02": "e5977f9c829dfa5c529aed43447d8dda",
".git/objects/e4/3f339d80f817bc81ba57bbd35ba50d87f16f50": "da53e8311e8d4b67880a8e1c1f075e8c",
".git/objects/e4/6332b9146e02bdd16969ef829d08f1d131bbf9": "5a1477b7d08376e972abcb08a423622c",
".git/objects/e4/8f95d4e75e51fac7c18e6f572bc8ddc3f4175a": "8e0c443c5589f471112ef2fb527a40b6",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7ab474f98c3419d2fbcd27364ed2755d415d48": "99fc459ce4a861a4300365fb149db1a3",
".git/objects/ed/8e281441f36b017d252cb3543ddb3347da7eab": "717060b8f2eb7950377c1b9bfbe839bb",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f7/f7e2c7e0ebbdc861e655f7db198c7a19b16108": "0de12891eedd8075855531bbf16314ae",
".git/objects/f9/284b42a6f06f64caa5d7733bd792145aa615a2": "64093ac4806dd775c49d3db7c31a059c",
".git/objects/fb/cc67388b2758cd4e45738d833acc9bd69ec64f": "6b4cbd93b261d33dd0e6ba92d2ce8493",
".git/objects/ff/ddf8c9ce08bf7ed05f679faf9a34477fb5d9e8": "444d70f16ed2abf49f333d936d333784",
".git/refs/heads/main": "d6569b834fc2f7ee82cdee01c86d5108",
".git/refs/remotes/origin/main": "d6569b834fc2f7ee82cdee01c86d5108",
"assets/AssetManifest.bin": "b865d04e0c4eab45943105b3d63aa05f",
"assets/AssetManifest.bin.json": "11540cb53005d0a94215cd7c82f8a9e9",
"assets/AssetManifest.json": "6f28ac3a2b18fa1227adccada43be94b",
"assets/assets/images/facebook.svg": "9b2e63aa06ef8d20bc5c97a0df5395b7",
"assets/assets/images/image.svg": "8acc4ee915ec20900fa672de25cf477b",
"assets/assets/images/insta.svg": "69887f067db53621a849bc87d495ee27",
"assets/assets/images/linkedin.svg": "3610f60ad23e68df41bfd6c940fa73fd",
"assets/assets/images/twitter.svg": "16ad797305ee21bc0c7dea0b4307717e",
"assets/assets/images/verified.svg": "7c266c304c79a4a4d12a34d0113aa52e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "16e0f5f21204d53e7db00714a9b1f962",
"assets/NOTICES": "3e6ea209022fc434b6c01cd12df8810c",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ec1614b0d685a41ea4c0f9b16a6c92b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a16ed690e0a0c60811e7a8401e457a0",
"/": "8a16ed690e0a0c60811e7a8401e457a0",
"main.dart.js": "73cd10683eabf3c6175428de154290d3",
"manifest.json": "eff756ef8348fe98f8a30ba0af8ab59b",
"version.json": "b3af55e099eccb72fd9256538e3c78ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
