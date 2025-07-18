'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1e07d02cf8d4637bba787a62885f3581",
".git/config": "13b3afa3d3d995960e7c865d4ce166ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "9b8139efe15f6685fab425adeab4dc7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ac84e8debb6586db91f24bef2b0f842",
".git/logs/refs/heads/main": "4ac84e8debb6586db91f24bef2b0f842",
".git/logs/refs/remotes/origin/main": "4fabcc7517d04d152f7198f2a47dd960",
".git/objects/01/20e9052d28786648148300a69aa96a33ca121d": "c48b52800669b770db06523c0a70a2b2",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/aeeb91ec606f236c99dab48b32a4ebf7bbacc5": "a73806005618f311f1a8732d5a1b3499",
".git/objects/05/f94f21735a8113ae1f010b5ce7125abae1549f": "179807aff6b2a2fa1d3cce582837670e",
".git/objects/06/93c9ea77d234fb0a134d18bee2c94c3fd126eb": "5eccf6f7cdc7448a9ec6f9ba8f5063fe",
".git/objects/07/d9ec6e4ed8e774aab5ba2ff6c86b72c9505319": "1df40f9fa8fbbc1c62523e80e71776cd",
".git/objects/08/0a91edb03f32db02c523a8afbd7a2ca286c112": "c53b68f77caa31352c0ca1ff7fc4674f",
".git/objects/08/0c09266e0f43d46cc47c86067f7cdbf6fad6b6": "b61d8160c9d3273348ccfc239b512ddc",
".git/objects/08/7c24f125def98a8165081c3e5a4752865f7098": "6430274dc5f56f865a9142b86dfa0b5a",
".git/objects/09/a56892437dd14a02aeac8ea619e7032f9f556c": "1e0238175f5e9d593dcf7d5cfb4cd525",
".git/objects/0d/5e3fb1e2036f912d99ab30f22e202d4b52979c": "7f708bd954924a1b018dd2f72c931c29",
".git/objects/0e/7b327e709757110f6bfafebe3c0f512f8fa58f": "379be85c89899d0c63240c83899e7c38",
".git/objects/0e/9101b09a67995f26d9595e26888b81040c6e7d": "43ea3c898bab7431f9dd5bd976520e73",
".git/objects/0e/e8f13cd31ea3ff6bad4bf9fe0c5b7ce4b7cab0": "3a27c4aacf17e317ce38c7975a78a237",
".git/objects/0f/8699e6e3dbbd4f741f30cf20291a20505a9af9": "b4b18a187b3b2dbfaa3e46c569849ab2",
".git/objects/11/5fa46cedc4f5fc8a0b1bc482adeaddb0924e65": "e2932312e1ce1e8ef21708fd9c289a47",
".git/objects/12/9d7c8c6927f7214e995c9a2569f9fa87c2f24c": "be7cf8fb95c4693e8ad16cdafb6a6ea9",
".git/objects/14/8fbebefdaa6ea243911aafa3b5f8a6e59906a1": "2b576acb956ddfabf3cd2b4a34a041f0",
".git/objects/1a/b1e03f10030cb03c167143510f53beabd76b64": "cf4bbe9d1da580ca25c47f7a38b3a739",
".git/objects/1c/11ee5f26e6e17b96245729a178ef2a92331b26": "0324f8c7ca7e34fe1ac8e4128b77cbbd",
".git/objects/1f/690ba756b394042b2d69377dc54fc7ce42aa28": "c578709443b927c26dd2b8274754482b",
".git/objects/21/0a37982c5afe1e522d5d5b2f669381032bded1": "83230bb5759114d322351914a889dec1",
".git/objects/23/a7aa0cb3da22934237eb735e905272868b4dde": "c8cafef91924c79d8b6970e3963ac61a",
".git/objects/25/c7ae63032fef6f8c555e6728cae5ddfcadde98": "b8f1cc6a222e694780f87deb2f4a1ecb",
".git/objects/29/4e44c8d8f075782553f02c6546ccbda2937432": "5eef37cb85efc90c9bc2329f53299b84",
".git/objects/29/964c0d273d6b8b8b13f9c0d7d922075e12be82": "7d4dad1f11645566a0a648df549c7d7b",
".git/objects/29/c8d14ca49e3bbcf1cceb9f737f9587db135210": "29605909d3570b376a57ac5fffd7f49a",
".git/objects/2d/aaf36628391c9b947ee5e5362959fd38ca247a": "75288c1eb592c74c7354f490a2b7fc3f",
".git/objects/2d/b5aebece7fd7b4a5b0ecf3d24d034de1d5ceff": "89c20759815bdf592c84b6b9983cef21",
".git/objects/2e/73de72036c34ee5af0d27b197d0afa57e0a3f1": "bac27b736194abc66df3bec933d964eb",
".git/objects/2e/d46c0940f31455a3f9bb234419d53137ce5579": "307a4d0584a57ae514f7d0da4e24c3ea",
".git/objects/31/22300767585c4d04e3df1af45499e2fad1d0a8": "e98ed597f929a2b1e1a3ac3eaf8bef4f",
".git/objects/32/5c3e5c019e508721c8e26e11b447aa067a021c": "c6e112f895e7733d09e4228be8a7bd4b",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/a063095a7005134bc34ab233f033a0de1d1c44": "23e1f86cb2edcbe98e847fa1f8e7c3ad",
".git/objects/33/d5ef9e3b493907ac961ce9fc37593ac3ba4ed2": "fe3fa18d8e9be70fec8599801fc10453",
".git/objects/33/e377695d2a50c2d868677680f838e1264833f8": "a6c003023483c0be03756abca1a92075",
".git/objects/34/93317fcdf6b505c5aab386fb056c934c8e1f07": "704d9dc3856e5002299e5235db2d1b5a",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/8bef25bee6d8ee4e6a4bdc02890db7fb5773bb": "f0ce43224797bbe31d1011ae4fbe7822",
".git/objects/36/9256271fdf3184f4125295a521c9bc2c500979": "32fb5207fa59eb60bfcd66a04935096c",
".git/objects/37/b3ee7cd3818ca20e788fe956c8e0f7cb09ca0c": "a0197544eb70dcecbb5d6c085772994a",
".git/objects/38/4c33266595a0e8e322a8d9a2407e0876b7a2fb": "5447f56b7e250d2a54ec0b6ff08fab16",
".git/objects/39/0e9d1622e671f71cffaffd139cfd32ac8b1661": "c091bb16ed8e66aa90eaf751d3d797f0",
".git/objects/39/411394ed06f54f11344d4b335f04bee4c33da8": "3497e06d7678db7d10a97258d1daa8d1",
".git/objects/39/fbf24aa7f3d2b51798824abe1db5c11bc6a7de": "31e66c8594308a7d0568605de234fa46",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/d3c9ba92c5398f5a2004da755f7e1fcf0724ef": "0260b9911b1e514c5cbb056b7312beb9",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/f6c2e827a0a0e99a8c18ced8d3b1fbd24b01f7": "0ad8c98d742d5def52995e438987c0b2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/e1da1213d9762f3739f7a454a79ea4077fd37e": "5470dcb64cec55a3026fe7d01b7300f8",
".git/objects/40/eaf24bc155a685e528ab967f01f969522cd570": "15edffbe46c50e63119e75272aa773e4",
".git/objects/41/6aa5abaaefe2263a91d36c876ea33c6f2c57fd": "9fa59807deb9df01c2b3e4678a67df0b",
".git/objects/41/8aff910332e8d46b53f04f538a7f3b886bec09": "5d0864a4820fd10fd71408aefb8f9bcd",
".git/objects/43/88bf8e6491209bf806b1d260f03eda8d0c2185": "1da07d744bcf8d9bd654fc67e8a6ba3e",
".git/objects/44/426fe2681b2fd9d17e13af989f43b17f696b6d": "fb69bde6a83916fa1454c123b0e260cc",
".git/objects/44/706a66959212b525a2d100cca940820758331b": "c70d7dda9b96a71df2b3ad04f19e1b39",
".git/objects/44/c9da2043b0799c27ae3fd03c4df3d9f67c0691": "f0a21b12a6374817c0ecf3ec356165c3",
".git/objects/46/237261bc52a643a99f1d72efc9f4ff6fdb7fc9": "9adc984c20a667284808be03e6079de3",
".git/objects/46/36491ba07dbcb185b7804e2c13bd18a4123298": "44be3a487f3e04c3bb1026a47c49cbad",
".git/objects/46/8a355edb2d2cc8b7072ffb6bd8671f4dbd8caf": "591c15ffa9527a2467ad20ef56ad0204",
".git/objects/46/bee9bbbb8ed9256db29d531903f1468562b59c": "933ca2fc4a3ab6a467a4c6e28f32f074",
".git/objects/48/ccdde1410809fa735c1370376b507c038d16bd": "e732bc8302c3860bd694c4eaaf8d056f",
".git/objects/49/e49373ee6c6b02d4e4ee90650b51c7b63f1776": "a0cee025269900adf516ec7f19b662a0",
".git/objects/4b/3feb97c917d5caf1472f51e4db4c378215f164": "90482f128ebe61e41e10d375ca0c69a2",
".git/objects/4b/6a43bad3dfd15af8584097412871afce3f4325": "8f77d1bf01d522c21b122e5ce3c74837",
".git/objects/4c/b711989c983e91401f6d0120e4fa82a7bcd79d": "8e38fb713d543a3c0e948871af4bffdf",
".git/objects/4c/e8beefeb0062e0e6d42e1b5aaf230f7e38eb2a": "39e84b9f5a6958dd501d645fbc6c5055",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/4bed1e6ebdf4b6cb3c01cd445556e3f85b13d0": "563469f43109f7f9efbe931e0c61a63c",
".git/objects/51/5da3d98a189d0fa9e14a46df86db04b0b73104": "7cf3566476185124d40c41a0eefe0657",
".git/objects/51/cd3786318b78bd70f236c0e528826d34994788": "ff014834c7fb4b3f6716b8332313ec33",
".git/objects/54/6db0e545606876da5656a5d9644f03d280ef08": "82342394d06dd5182b8981f08f817f0b",
".git/objects/56/013e4af55e43df93d2285391bf5340f78baf86": "a07b29f3a7f91aa3b64d46f7c331af94",
".git/objects/56/85e3c2d8e0116e0a5f018a9af4e7b3810cf067": "59c004ef7c554d37cb88c3353cbb403b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/dfea302bf62e5acc66d88246600f17bf5ab079": "4a49adbe15d6fd3db687dfdfb17f74c3",
".git/objects/59/533df1d205a94ae562dff2a1cf69785fb1bcac": "fe294a43e0a0ec3af52834d7be9223b1",
".git/objects/59/a03f1c454330bf2cbecfa2be2aac6ab84765ee": "65c59e7efef15c7676bfe0cba43c82ea",
".git/objects/59/c18cde894e38832a3dc0b1b928682ad123a00d": "9946712012423a5ec3d55ab385be5777",
".git/objects/5a/1faeb19bba89f31ad28038cc4fea16ac7c3e1e": "80ab2f5ae32b9d983366119f19a2a3d9",
".git/objects/5c/314dd0c9ff92e2576a100dbdc5ce0dad0504c2": "10661ef72d694378f7e8d07739250f3b",
".git/objects/5d/2d8b6fb2bf34bb6828fd31f7128af7268bc717": "e34b525df15bf641b9ac195caf727261",
".git/objects/5e/811aeb6a34b8d3887f80000d1addffd25d9361": "360c2c76293f6e7c4bb15a7f8d10f291",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/25dab4dde86a1232dc23cf69cbf5861f42104a": "bd3e3f2bae1f3182e9647774af1ba80d",
".git/objects/60/ba93420ed4f1f31441fd982adf52a833717559": "0838b306857f43392ecbd99416fee931",
".git/objects/61/e1cd8c867d50f6f583fdd04e7c384f54136734": "348e102f2aa084fa04bb8e2f9099c3ae",
".git/objects/62/37ae83704f7c4ae997e199d78f1546c5efd3f4": "4d0ff66d4aecf4e4df259d55fe693de3",
".git/objects/64/4b2d9cd9cce7c60ade4513931c4303355951c3": "66d53075852cac58578c331d32a3bbc2",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/880734bbd168edae51cd09d2e4d75ee02a9523": "386a02afd3d0b8ad580d3ed013e733ec",
".git/objects/64/e6a99f1d3440320e0aa16e3f15415f1a5c1e65": "12e8eb7e31a1b22ec065bc81a4e331ce",
".git/objects/66/3cdf44630541fb1911529a090894d87b787d35": "d22eba33ea6bb3e3a23f5996136d1086",
".git/objects/67/6d0603bfe381a0652d39c87c16f640180e7650": "fef68566f39655b46ee7c98a69de2a19",
".git/objects/67/b8f62f3b9477dac3c72e9c54508fe041c6e86d": "5431b3187b1661657ef0127be9fac3e3",
".git/objects/69/394d99f391c1c58e8dd48c610bd4c5dc37f9be": "4c70dab1f6893fe821a74f936acb1e2a",
".git/objects/69/4e19ade70ecda2eb81d8105d87c05866812cdd": "3ae6e4540ab9e56b581b9b20a57d7524",
".git/objects/6b/2905c7ea2c9704b0e729e6bc98de03e415199a": "f1be8f8518b55e7c92193d2b973ce3e4",
".git/objects/6d/98b15b2a47d2ec1bc0cf005672c6d3a364572c": "ba75a90736aeb872e1333f9434861bf6",
".git/objects/6d/eeb574cace4d490b6e22549ed59b5570288b64": "a3db520b6af9bd0a0c956150f9396c16",
".git/objects/6e/84a5c695fdf7eb5d0ad57d3aa29f7af24045a8": "3959a8806cd4f04c3c77ec49dd243e54",
".git/objects/6e/aeb683333d7a1931f87f00ae149ef6a1c6fefa": "0fb0cb1c287788312b1a152e119cb546",
".git/objects/6e/b178ac10b12add2520feb9b23a6f9144a9c873": "c1595333d11589199dbfb7db66d1dc15",
".git/objects/6f/262d24423d384089df9e776f6e09ad29af58f2": "2546631b212c7efb09d52652ef2bed1c",
".git/objects/70/4bf7cd3a15cdc250d42f278864332e24c8768e": "6ed8feb713fc11705a6e809d54437760",
".git/objects/70/887abad2acd8062132637b1608e4a726e3c722": "37e0b401bfb3bb35319849383aa094c2",
".git/objects/74/683bdb76b2dc9cec5c53ae4a675d6c26d067f6": "36244b7bea01e31af31445bfbefbf597",
".git/objects/74/7c96763ba8a1c193a5ffffc9e691940d0c9ccd": "1a45817e6b18eae61edf8cb575cf0b2a",
".git/objects/75/1658f07dc2ea25537cefba7fef02db4c1577ea": "eb632c8e0ba6983c2f19b0e22eb9ffdf",
".git/objects/75/a37f8db0d77bebcefdda141261116e67622a13": "5d48abae8c66fe7c2bd03abfbd969ad5",
".git/objects/77/7c685876f540ec320146772a28fa0348f5af18": "4f15ee3f51deb92dc333ccae1087fbe7",
".git/objects/79/e0f104e08ef489d95a0cddbfe8f677ab291c10": "e22d4ffe4aa43e374329f3b148eaefbf",
".git/objects/7b/02e3b4029a8ce0ed504f5da2601478e7df9927": "0619e1ab12fb79dd14a5ebaa5585a355",
".git/objects/7d/0e0c8a2be6ace488d2cd5d3d0aff70ca84a476": "6caccc287b5d36f072c1ba24fcd45ab7",
".git/objects/7d/faf775d8ffe19be6a19b6eacfd97459d7e1fa9": "3a7e21540eb2d59ab799e9e77b972bb6",
".git/objects/7e/6c47457fe81c7305fb2a8590d771560f52e46e": "1b5e4181b99d0b83126397fde834fe48",
".git/objects/7e/984caeb80a6895120c92e0402af455707bbc3d": "a7304d8193ec0b75ca3a19e72d316544",
".git/objects/80/978db12503921ba634f6b448b84a59306e51d0": "5baefc03b4cce5978671f53940067ea7",
".git/objects/81/cc12aa17e7b2165c4e2961aa2d4c3cd052853c": "6ff25be971650c618ca8c1544c44adec",
".git/objects/82/904e0f01e0a946254302182df10785567497dd": "fb37d413fefdfa4d042eceaae95a9405",
".git/objects/83/0c6181b60cc3c179f6050ee1b329c55da4ac9a": "220fba7f3183700a09230a705c7e1a7d",
".git/objects/85/467485d8473a6da5a9f0607192b17ebd23dbe1": "811277cc094bba46acbc8497994766a0",
".git/objects/85/a23783d03c0b7764abab12d7d743e7a0fd4f72": "d8a7e4ab5af9ecee6c42331723690f3a",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/23a74c855155bb162bf14e5ac4f3449d9704e4": "cdb84fbb18a6f9f7321f8d717fee5aa0",
".git/objects/87/535fafba221d3bcc2fbebd46c2a3e1df4dfff3": "bc2142601b6b93f99728c46a831e269c",
".git/objects/88/659e5b09043aeb7779d8b559d59f1514046ca7": "a7ada2f15e766429a4604e73a6e564ec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/20955d861dd953c2ce0c03e50d685d7264ff51": "35bd09c76b890e67998cca8991cc6539",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b87b09a8c068f59da502e9c5d397e42095d1b9": "d16f17323b0b021f0cd5a6a56fd39e44",
".git/objects/8d/57b224b97118e8a398d594c792bc9101075c32": "970055d9309e0e7762952bf61bb4477c",
".git/objects/8d/5c220b0067b13812913a24f6019ee3b541a7db": "011b600d7fee8dc8fa081ce66bb07218",
".git/objects/8d/9ce6a465b24955f7bb04d7f9d3c063ce065c82": "c4db1f2d4b253e9f2eb9179c294da001",
".git/objects/8f/0f56890196b6433586670e33f8cacc30594061": "b88dd92890707a65423c37b3d2b1ccd6",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/90/6798ff57662ef7341243f96ede59a3bac7a6b4": "2e6ee949dd2cd2a2f2334e6bfb0a704f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/c0b399c6ac4ddd9f01b3e2efb3b69ee11b6d56": "30774db050d40ce8aff39b58852bfe74",
".git/objects/92/424e7bd60cf088be530673cc411b96c3205184": "bbde5702a0b991a64f7cf7d55f10c0a3",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/97/c3ef53b1b00a9c075faf87f595686ea3d294f3": "b18920c2ccf2d67fe55400080c29e1b6",
".git/objects/98/5929e7aab85dd9580213fa7ad445f226681e3b": "70eebd4d8e3538f76cf5caf6c719b94c",
".git/objects/9b/413c5013ba5488c7ce2080891cd16ae6098d8a": "4b4b0b42bfbea1493eaa4a95e59fcdd1",
".git/objects/9b/527d09ba200923ed806a7ae3d526f1d0bad772": "14132c90faa013271055083625f95def",
".git/objects/9d/8610abe784f4c2e1ab9cac5d5c63a8d745f5a5": "f41bf07baba0067cd133b21410b3049d",
".git/objects/9d/ba6b8a8401012c4b73ae8c33ec10b4759c17e6": "5af2e5a8f13fb974523fb369c005b489",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a0/55563d1ee89ceb2553deb4739631f18dd0d0aa": "a4a9e03da7a8f7c7bad53757fd8213b4",
".git/objects/a4/40d14e70a4459393261e96f0a87812750a3e0e": "6e7279a891d9c9ade3d98a8821f51b7b",
".git/objects/a4/7a1aced45955f52d3d8f796f62ed0450a6942a": "26b1a4fe9eaf1c5042e15f89b46b07a5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/fbdf5b3386c05a6afc4c0b3b9ce6d9cb5df436": "acd432cd9a110aa4cb6465b7beae9ce0",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/25dc602e7a698916bd0d7fd15f194415bb2990": "4e3d4e410e38a2f53ba5d19a6331b18a",
".git/objects/a9/4a8b44b9ade95c01ee6d02502488f5fe9632f0": "9cb75ed64342d2cef02600224ad1410e",
".git/objects/a9/825ffe234c54b15421d8f4f836628d8ddcc522": "638a4a966d6a260eda7de8bfa7a51959",
".git/objects/ad/30956270f60e43a0bcf57a436d08da7028254e": "1ea2821a39984afa9c3cad739afc0dd5",
".git/objects/ad/697fa1cb3db8e4a12561876a19aaf861cd1808": "419777c28a7ebcd946ba77f25edc8fd3",
".git/objects/b0/2d5982abc8ce6901101d1eb151f474c2153bd6": "65cc230823bfa72be52c0a873f0d0b89",
".git/objects/b2/7336a3deaaa59aaa298425f6a3600e2b39c351": "8439346d0fbee5497c8fd9e3a7b1d1e1",
".git/objects/b2/d53a0560234387acbf1f8efa3900927017f573": "bcb39b46e0f5a1615fb67b19ed16452e",
".git/objects/b4/0c477c03c5e66d01e038b5488ae86fda28d8c9": "1de6f0c4bd631024f1772a5e8a4771ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0d6390d798a0ebb4ffd2b898ff614692efcdfc": "a7aed3805a4032169023db8606240c28",
".git/objects/b9/143ab21c2cba51b1a1e361b8268d17d11ccb74": "2d49874f4d13812f8620715eae873649",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d322b7faf71ebc0ff2fe9b704f4a6aae7ddc5": "910af24eef76794da8eb491866e36f0f",
".git/objects/ba/1a40247cf49c927f85cacd611d354ebf0164e7": "f5af08d4423732a379b492afadfa133e",
".git/objects/bb/368c849de68849cccf5dfcfdeaa72204f46888": "f503dbb3178bf7b61fc0e77e9fffb608",
".git/objects/bc/7c6d488cd1b75a1716ea894a8fb3615c3636f3": "296c709372842b60287413d25aa4cb9c",
".git/objects/bd/e11e61c9858231eff85db50da362e3b8c1b8e8": "83754dcf2cd6b742dbeb405363cf830c",
".git/objects/bf/5c11fa698f645b45e53934f59d96be8459cc1f": "1796d9c09d20110231bb336c508ccaa4",
".git/objects/c2/31fe12237626999e35b28b0a6749e072d84e6d": "681df87aa063e10f5e65c4dc2e46254a",
".git/objects/c2/4b871347637bbefc847a16f3b4508a34f3f093": "61e1f13ff2e50b165463045d21ea2567",
".git/objects/c2/d184cf927b4a9467e6a984f7c2aa1224c82491": "e5c9a567a3f4e1213e939e0bda743033",
".git/objects/c3/4806472c16724f6fbe0398ac2d20eef41050f3": "3193af27f3a5d38b8c097448aa50c25b",
".git/objects/c5/47ca00fca9e300623c9259f1289451c2f4d347": "fcbfe31e53aa1e41f922ac1979b5b786",
".git/objects/c6/8e0e55dda1d0cf234b8a7a87551e9bb70b3638": "9fdf8b4573564aa354b485789a3a5e46",
".git/objects/c9/8f17e58cc22ecd4d68774c82df5dbaa071a45f": "add5ebc1c79f420f953a1cc8e7c8be3a",
".git/objects/ca/974e292e659ca2913e15b02540160f52302845": "6f442ff17e3ae1064c0a685dce2626af",
".git/objects/ca/b2099317873838ac5d22f2765f76f29094643a": "0cdfd9cc5f43da29a63f46ac7b05f768",
".git/objects/cb/0e73971dfd6aa60ffe1fdce36ad56f3f1630d7": "eb96db013cf0502a0de6b2e287a43969",
".git/objects/cb/0ead451e7ed9b3a4ebff3658db437b99f9e526": "845c7ec4bf41f28f3081e5f8f0aa63c9",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/a7b9702538457f29d0a037f18f5b540a7b7f9e": "2ceac10d7f538348b19fc6cab04723ab",
".git/objects/cb/b5f419d6110cc04951405af7822b670595b1a6": "e9dd93517546f56709d74300967aec9c",
".git/objects/cb/df50b5ed946d13d95063e0824d8b2408543f73": "dd366c2ed18d132985b973bfc4a3a062",
".git/objects/cb/f7b64184ee6c81b344d33e2c087c2ba63e1fb3": "a1482aaba6d8cdac6fa6abf99968b694",
".git/objects/cc/fa96b7a761ae1cf87acda7f99c655a3eec0f2d": "072683abc7c155caa890c18e606767bf",
".git/objects/cd/7c37a46dcb25176aacd64d976f70d2aec7e36b": "3e38965ee6154a22b033bfde19a041b6",
".git/objects/ce/0c115aab399abf1fccdd8cdebd071ed8d9c057": "96f74a1b94aba5fd40b59b1465a37811",
".git/objects/ce/942c9eac8fae4b069bfc3fed4626ccac86400a": "816e5ef79ee3d3c4adbbcd77cfbe0afc",
".git/objects/d0/36e725e78a9cedac1ea176c57316a8886a5cc5": "53c8e62a9ce917b9f83d55c5f29df184",
".git/objects/d0/6809be5e4e57a8046adaa52bf27f6a990bf90d": "3fdb8bd7360f57383fcc601605009fc3",
".git/objects/d1/296422b7d794491d3685bd5f3c2cc160e6abe2": "4ed3fca946444e14227ca357c3a521b6",
".git/objects/d1/47d07c7a69b47710b02a163276039eca45f883": "b5f33879133730c8952ed57ea3512540",
".git/objects/d1/86313f3e3eba0710cbb4a6132e2f679c1c9f3d": "ab9bec67b6ac99563d3851d36d899818",
".git/objects/d4/08c3a1a5beb3a8ae62e3d5485781e3aa1b9155": "c7c77c360464be82039389aaa62bc863",
".git/objects/d4/11de75f2bdcdd8f0b4f00b21b55543db508825": "a4334976c1f7cb8e1087ca93fcf895c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6d96977b0f04a440d71d70b9cba8e9b9e7dc8c": "d64517a7ca959624f37ad2932f9d70db",
".git/objects/d5/c2ce508a5146484077164a692cbfeb8ebe13a8": "b5e94517882c8a328f32e355b995199b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/655c2f32f2778a2538e6532652c169488dd1f4": "bb1e678c105f08b34093fd1245f5c02d",
".git/objects/de/e5c7054d7979ce6763d99e255fc8a07e2d8e7f": "0a51e34963896bd29646c690a340a62a",
".git/objects/df/249b796eae2a4ddb4e8c729f709c7c48efd8cf": "fbe153ced54d124d878a5c1757e27f1b",
".git/objects/e0/5d2eca192d68a6042894e787eb5ae83d76c5c2": "575b9685878f2e0b65a49ef08a1301c1",
".git/objects/e0/7bfea940cd7c74ed803c315ad7e342a19520e7": "b15c25ad3895a6570b1201d09d3d2fc2",
".git/objects/e0/cb103f71a949b4cd3b22bda22e2bc54b9e9b8b": "d3a11ce1d44a845eacb5139d58e98d25",
".git/objects/e0/ee9ac5311e4c1519775369f0651c44271a87a4": "73781f71a0bf27bd6c75a7124e3cdf2e",
".git/objects/e1/0093af075d1bb921aba4bf9afa1fdabbafc5f5": "b504e52f11dfc6c9459ed2acfebe5622",
".git/objects/e1/1b1d0667d23cb58733bdbca181ca8ccc1d833e": "01cbf4ca98a99f49f97fc7ae9ef12110",
".git/objects/e1/c9f8dd035688dda511cffaf8d9b5394a40b087": "22af7f3e22b01a627f8277986f288cec",
".git/objects/e2/d816cbed372f320c1897695f8edf82e3f819f6": "8eeaeceec249d8813b815318a204be1c",
".git/objects/e4/14bf5628a590db7fe9cca5841dbb754ba3247a": "aef634d453e9ea3ec6a0a6f65302cbfa",
".git/objects/e6/0a373bd94bd12cf3abfb6482711557166bbb88": "028f69af8a8d93c7284634ce172d343e",
".git/objects/e6/98ebc4cf76173274f634b0b7003b2f2f82d543": "35f9c90428a8f3fd0dae3a35e7cc6000",
".git/objects/e7/4a20f1699282ba747a69056e44d3a3f53f9613": "95ef6a52ec338cc0198ee9e3c569473c",
".git/objects/e7/87d9e1fbed4b0e74f57672099b21d91735c85f": "6ab0f4e46d49541a7bc19934ba8327ea",
".git/objects/e7/deba78a9d023da600b4668dccde98bed729a53": "589e6d641520ff0f6b4fcf9ae6716544",
".git/objects/e7/ef3c4da607eb8d39893da04db1e16b4bd56895": "86701158d4ee4a840def45d1d7a95820",
".git/objects/e8/2606b577a4007a3db135263c30c20127a3af44": "f94e00930d18903ae37e3a8c47c70c1d",
".git/objects/e8/37ff3738a07db90219000e9d873705a7f3236f": "bd6ef08c1f0b482bcdd719dd8f6d0180",
".git/objects/e9/42c5060e25844690d0124b3a9471346d63ccb1": "c8afc464b5006df738d570cefbeb6952",
".git/objects/e9/71b7711fd28bb00f79aa7bab891898577600f8": "9c170f9cd22311b7e3364fcc29eff6dc",
".git/objects/ea/70068275e9e4d2a40a9528853ec69cfae0d6aa": "131fa914224114e4c8ea8e9bba3bcb36",
".git/objects/eb/1cc871e3f3e72752fe5e4daebafb8af23a6e51": "4f23510d07ad28bf8bd2ea71bc2f7d80",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ce5d75da6f8a1d08c75f53da3e602e0fb5c9ce": "7ab3c84c75791d64e713fd4b844550b8",
".git/objects/ed/7cda46d7ccf5202ea5a2ec64151ce967512b68": "0acea4506e8087dd0f095263e0a30ea0",
".git/objects/ee/74409de72adcb3f07320eefb371ea54ef2bb4f": "d3adca843770e76ce48769e13d46430b",
".git/objects/ef/3b93b78d0c82507c5132eab7dd7544fa12939a": "86ba8859850179548f40a37298e0df87",
".git/objects/ef/83e6711773254f6e7e066f576286467366cb52": "b525854d70453f773442124675b5d283",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/82b2933e4c240494b2251d551ecb0efd1135cb": "5e48bc4c9b499e42f57a7c5b7c32bb3c",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/ab259ed0bdbd409b7e6d35e7332da9239e8cb7": "fcd296d9f65bb7c9397164f7906dd033",
".git/objects/f4/a109624ef14be1c5a4afb3be362d222f7319b3": "2dd199a93c44ca105011ab87d477d95a",
".git/objects/f5/0d747e64d8b7db85d577ff84c01f981bf07034": "5acef07f5d1c41c357d6cc68905ca549",
".git/objects/f7/468c8fcbf04e1f14f9322946b75c704a4887a1": "75846876971ce566a28135dbe867f7b5",
".git/objects/f7/f184af9a7887fae9f394615fc2b2a75f2a64ca": "c01868d22beb2c6c6617199cee9411ae",
".git/objects/f9/5990376a6cfe2aea833bbf4498044569adeefe": "9f6d20052466551acffe36aa1031033b",
".git/objects/fb/3decba8a177ef1cb5dc8664704b979cef13eb8": "bea2f960fb4a3588c98b11f2381f4e92",
".git/objects/fc/8c157e2b2f4f4956d8e19f6e76a34a45953f87": "fb2737a91ce8fc6b3c8ce48386896f9f",
".git/objects/fd/f28cfd8323d2834d10e47848c2ecd0090b86cb": "e3f585770e63fe713711552b496b451a",
".git/objects/ff/3e7943a2e0067994fabfcc9d75530cd820e196": "d32f51d10a9385c3a3b52191e633b5bc",
".git/objects/ff/98cee1e4bc6e2183de89db9beb1521fe238885": "5ac0540d273c3bf695da2b32ed6735b8",
".git/refs/heads/main": "b410febfa93ec57d6e9ae78a7b316db8",
".git/refs/remotes/origin/main": "b410febfa93ec57d6e9ae78a7b316db8",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "e31b20b92a450a26bb9e7e55259594e7",
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
"flutter_bootstrap.js": "d11aada8e7907ae8c63d658b1984c408",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3129b2e4da844be4a60f9bdf850aa21",
"/": "b3129b2e4da844be4a60f9bdf850aa21",
"main.dart.js": "56dc82903f17d2a6db5ffb896f09eaec",
"manifest.json": "92f37003ce36a37957a9f238175225b2",
"version.json": "76d626240685bd404660499fbf6a64d0"};
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
