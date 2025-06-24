'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5c9250488a6185ead7e3decc8dcdf1f2",
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
".git/index": "ac3e79eb0c3c9e702c12f429054ab192",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6aa0d6eb875fcd0a5b4e28fc331975f",
".git/logs/refs/heads/main": "d6aa0d6eb875fcd0a5b4e28fc331975f",
".git/logs/refs/remotes/origin/main": "0ffb90acfb7d4f25fa22311aba0f98c2",
".git/objects/01/20e9052d28786648148300a69aa96a33ca121d": "c48b52800669b770db06523c0a70a2b2",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/08/0a91edb03f32db02c523a8afbd7a2ca286c112": "c53b68f77caa31352c0ca1ff7fc4674f",
".git/objects/08/7c24f125def98a8165081c3e5a4752865f7098": "6430274dc5f56f865a9142b86dfa0b5a",
".git/objects/0e/7b327e709757110f6bfafebe3c0f512f8fa58f": "379be85c89899d0c63240c83899e7c38",
".git/objects/0e/9101b09a67995f26d9595e26888b81040c6e7d": "43ea3c898bab7431f9dd5bd976520e73",
".git/objects/0f/8699e6e3dbbd4f741f30cf20291a20505a9af9": "b4b18a187b3b2dbfaa3e46c569849ab2",
".git/objects/14/8fbebefdaa6ea243911aafa3b5f8a6e59906a1": "2b576acb956ddfabf3cd2b4a34a041f0",
".git/objects/1a/b1e03f10030cb03c167143510f53beabd76b64": "cf4bbe9d1da580ca25c47f7a38b3a739",
".git/objects/1c/11ee5f26e6e17b96245729a178ef2a92331b26": "0324f8c7ca7e34fe1ac8e4128b77cbbd",
".git/objects/1f/690ba756b394042b2d69377dc54fc7ce42aa28": "c578709443b927c26dd2b8274754482b",
".git/objects/21/0a37982c5afe1e522d5d5b2f669381032bded1": "83230bb5759114d322351914a889dec1",
".git/objects/23/a7aa0cb3da22934237eb735e905272868b4dde": "c8cafef91924c79d8b6970e3963ac61a",
".git/objects/25/c7ae63032fef6f8c555e6728cae5ddfcadde98": "b8f1cc6a222e694780f87deb2f4a1ecb",
".git/objects/29/c8d14ca49e3bbcf1cceb9f737f9587db135210": "29605909d3570b376a57ac5fffd7f49a",
".git/objects/2d/aaf36628391c9b947ee5e5362959fd38ca247a": "75288c1eb592c74c7354f490a2b7fc3f",
".git/objects/2d/b5aebece7fd7b4a5b0ecf3d24d034de1d5ceff": "89c20759815bdf592c84b6b9983cef21",
".git/objects/2e/73de72036c34ee5af0d27b197d0afa57e0a3f1": "bac27b736194abc66df3bec933d964eb",
".git/objects/31/22300767585c4d04e3df1af45499e2fad1d0a8": "e98ed597f929a2b1e1a3ac3eaf8bef4f",
".git/objects/32/5c3e5c019e508721c8e26e11b447aa067a021c": "c6e112f895e7733d09e4228be8a7bd4b",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/e377695d2a50c2d868677680f838e1264833f8": "a6c003023483c0be03756abca1a92075",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/b3ee7cd3818ca20e788fe956c8e0f7cb09ca0c": "a0197544eb70dcecbb5d6c085772994a",
".git/objects/38/4c33266595a0e8e322a8d9a2407e0876b7a2fb": "5447f56b7e250d2a54ec0b6ff08fab16",
".git/objects/39/0e9d1622e671f71cffaffd139cfd32ac8b1661": "c091bb16ed8e66aa90eaf751d3d797f0",
".git/objects/39/411394ed06f54f11344d4b335f04bee4c33da8": "3497e06d7678db7d10a97258d1daa8d1",
".git/objects/39/fbf24aa7f3d2b51798824abe1db5c11bc6a7de": "31e66c8594308a7d0568605de234fa46",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/f6c2e827a0a0e99a8c18ced8d3b1fbd24b01f7": "0ad8c98d742d5def52995e438987c0b2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/eaf24bc155a685e528ab967f01f969522cd570": "15edffbe46c50e63119e75272aa773e4",
".git/objects/41/6aa5abaaefe2263a91d36c876ea33c6f2c57fd": "9fa59807deb9df01c2b3e4678a67df0b",
".git/objects/46/36491ba07dbcb185b7804e2c13bd18a4123298": "44be3a487f3e04c3bb1026a47c49cbad",
".git/objects/46/8a355edb2d2cc8b7072ffb6bd8671f4dbd8caf": "591c15ffa9527a2467ad20ef56ad0204",
".git/objects/46/bee9bbbb8ed9256db29d531903f1468562b59c": "933ca2fc4a3ab6a467a4c6e28f32f074",
".git/objects/48/ccdde1410809fa735c1370376b507c038d16bd": "e732bc8302c3860bd694c4eaaf8d056f",
".git/objects/4b/3feb97c917d5caf1472f51e4db4c378215f164": "90482f128ebe61e41e10d375ca0c69a2",
".git/objects/4c/b711989c983e91401f6d0120e4fa82a7bcd79d": "8e38fb713d543a3c0e948871af4bffdf",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/5da3d98a189d0fa9e14a46df86db04b0b73104": "7cf3566476185124d40c41a0eefe0657",
".git/objects/51/cd3786318b78bd70f236c0e528826d34994788": "ff014834c7fb4b3f6716b8332313ec33",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/dfea302bf62e5acc66d88246600f17bf5ab079": "4a49adbe15d6fd3db687dfdfb17f74c3",
".git/objects/59/a03f1c454330bf2cbecfa2be2aac6ab84765ee": "65c59e7efef15c7676bfe0cba43c82ea",
".git/objects/59/c18cde894e38832a3dc0b1b928682ad123a00d": "9946712012423a5ec3d55ab385be5777",
".git/objects/5c/314dd0c9ff92e2576a100dbdc5ce0dad0504c2": "10661ef72d694378f7e8d07739250f3b",
".git/objects/5d/2d8b6fb2bf34bb6828fd31f7128af7268bc717": "e34b525df15bf641b9ac195caf727261",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/25dab4dde86a1232dc23cf69cbf5861f42104a": "bd3e3f2bae1f3182e9647774af1ba80d",
".git/objects/60/ba93420ed4f1f31441fd982adf52a833717559": "0838b306857f43392ecbd99416fee931",
".git/objects/62/37ae83704f7c4ae997e199d78f1546c5efd3f4": "4d0ff66d4aecf4e4df259d55fe693de3",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/880734bbd168edae51cd09d2e4d75ee02a9523": "386a02afd3d0b8ad580d3ed013e733ec",
".git/objects/64/e6a99f1d3440320e0aa16e3f15415f1a5c1e65": "12e8eb7e31a1b22ec065bc81a4e331ce",
".git/objects/66/3cdf44630541fb1911529a090894d87b787d35": "d22eba33ea6bb3e3a23f5996136d1086",
".git/objects/69/4e19ade70ecda2eb81d8105d87c05866812cdd": "3ae6e4540ab9e56b581b9b20a57d7524",
".git/objects/6e/84a5c695fdf7eb5d0ad57d3aa29f7af24045a8": "3959a8806cd4f04c3c77ec49dd243e54",
".git/objects/6e/b178ac10b12add2520feb9b23a6f9144a9c873": "c1595333d11589199dbfb7db66d1dc15",
".git/objects/70/887abad2acd8062132637b1608e4a726e3c722": "37e0b401bfb3bb35319849383aa094c2",
".git/objects/74/683bdb76b2dc9cec5c53ae4a675d6c26d067f6": "36244b7bea01e31af31445bfbefbf597",
".git/objects/75/1658f07dc2ea25537cefba7fef02db4c1577ea": "eb632c8e0ba6983c2f19b0e22eb9ffdf",
".git/objects/75/a37f8db0d77bebcefdda141261116e67622a13": "5d48abae8c66fe7c2bd03abfbd969ad5",
".git/objects/79/e0f104e08ef489d95a0cddbfe8f677ab291c10": "e22d4ffe4aa43e374329f3b148eaefbf",
".git/objects/7d/0e0c8a2be6ace488d2cd5d3d0aff70ca84a476": "6caccc287b5d36f072c1ba24fcd45ab7",
".git/objects/80/978db12503921ba634f6b448b84a59306e51d0": "5baefc03b4cce5978671f53940067ea7",
".git/objects/81/cc12aa17e7b2165c4e2961aa2d4c3cd052853c": "6ff25be971650c618ca8c1544c44adec",
".git/objects/82/904e0f01e0a946254302182df10785567497dd": "fb37d413fefdfa4d042eceaae95a9405",
".git/objects/83/0c6181b60cc3c179f6050ee1b329c55da4ac9a": "220fba7f3183700a09230a705c7e1a7d",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/535fafba221d3bcc2fbebd46c2a3e1df4dfff3": "bc2142601b6b93f99728c46a831e269c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/20955d861dd953c2ce0c03e50d685d7264ff51": "35bd09c76b890e67998cca8991cc6539",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b87b09a8c068f59da502e9c5d397e42095d1b9": "d16f17323b0b021f0cd5a6a56fd39e44",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/98/5929e7aab85dd9580213fa7ad445f226681e3b": "70eebd4d8e3538f76cf5caf6c719b94c",
".git/objects/9b/413c5013ba5488c7ce2080891cd16ae6098d8a": "4b4b0b42bfbea1493eaa4a95e59fcdd1",
".git/objects/9d/8610abe784f4c2e1ab9cac5d5c63a8d745f5a5": "f41bf07baba0067cd133b21410b3049d",
".git/objects/9d/ba6b8a8401012c4b73ae8c33ec10b4759c17e6": "5af2e5a8f13fb974523fb369c005b489",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a4/40d14e70a4459393261e96f0a87812750a3e0e": "6e7279a891d9c9ade3d98a8821f51b7b",
".git/objects/a4/7a1aced45955f52d3d8f796f62ed0450a6942a": "26b1a4fe9eaf1c5042e15f89b46b07a5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/fbdf5b3386c05a6afc4c0b3b9ce6d9cb5df436": "acd432cd9a110aa4cb6465b7beae9ce0",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/25dc602e7a698916bd0d7fd15f194415bb2990": "4e3d4e410e38a2f53ba5d19a6331b18a",
".git/objects/a9/825ffe234c54b15421d8f4f836628d8ddcc522": "638a4a966d6a260eda7de8bfa7a51959",
".git/objects/b0/2d5982abc8ce6901101d1eb151f474c2153bd6": "65cc230823bfa72be52c0a873f0d0b89",
".git/objects/b2/7336a3deaaa59aaa298425f6a3600e2b39c351": "8439346d0fbee5497c8fd9e3a7b1d1e1",
".git/objects/b2/d53a0560234387acbf1f8efa3900927017f573": "bcb39b46e0f5a1615fb67b19ed16452e",
".git/objects/b4/0c477c03c5e66d01e038b5488ae86fda28d8c9": "1de6f0c4bd631024f1772a5e8a4771ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/1a40247cf49c927f85cacd611d354ebf0164e7": "f5af08d4423732a379b492afadfa133e",
".git/objects/bb/368c849de68849cccf5dfcfdeaa72204f46888": "f503dbb3178bf7b61fc0e77e9fffb608",
".git/objects/bc/7c6d488cd1b75a1716ea894a8fb3615c3636f3": "296c709372842b60287413d25aa4cb9c",
".git/objects/c2/4b871347637bbefc847a16f3b4508a34f3f093": "61e1f13ff2e50b165463045d21ea2567",
".git/objects/c2/d184cf927b4a9467e6a984f7c2aa1224c82491": "e5c9a567a3f4e1213e939e0bda743033",
".git/objects/c5/47ca00fca9e300623c9259f1289451c2f4d347": "fcbfe31e53aa1e41f922ac1979b5b786",
".git/objects/c6/8e0e55dda1d0cf234b8a7a87551e9bb70b3638": "9fdf8b4573564aa354b485789a3a5e46",
".git/objects/ca/b2099317873838ac5d22f2765f76f29094643a": "0cdfd9cc5f43da29a63f46ac7b05f768",
".git/objects/cb/0e73971dfd6aa60ffe1fdce36ad56f3f1630d7": "eb96db013cf0502a0de6b2e287a43969",
".git/objects/cb/0ead451e7ed9b3a4ebff3658db437b99f9e526": "845c7ec4bf41f28f3081e5f8f0aa63c9",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/a7b9702538457f29d0a037f18f5b540a7b7f9e": "2ceac10d7f538348b19fc6cab04723ab",
".git/objects/cb/b5f419d6110cc04951405af7822b670595b1a6": "e9dd93517546f56709d74300967aec9c",
".git/objects/cb/df50b5ed946d13d95063e0824d8b2408543f73": "dd366c2ed18d132985b973bfc4a3a062",
".git/objects/d0/36e725e78a9cedac1ea176c57316a8886a5cc5": "53c8e62a9ce917b9f83d55c5f29df184",
".git/objects/d0/6809be5e4e57a8046adaa52bf27f6a990bf90d": "3fdb8bd7360f57383fcc601605009fc3",
".git/objects/d1/296422b7d794491d3685bd5f3c2cc160e6abe2": "4ed3fca946444e14227ca357c3a521b6",
".git/objects/d4/08c3a1a5beb3a8ae62e3d5485781e3aa1b9155": "c7c77c360464be82039389aaa62bc863",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6d96977b0f04a440d71d70b9cba8e9b9e7dc8c": "d64517a7ca959624f37ad2932f9d70db",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/655c2f32f2778a2538e6532652c169488dd1f4": "bb1e678c105f08b34093fd1245f5c02d",
".git/objects/de/e5c7054d7979ce6763d99e255fc8a07e2d8e7f": "0a51e34963896bd29646c690a340a62a",
".git/objects/df/249b796eae2a4ddb4e8c729f709c7c48efd8cf": "fbe153ced54d124d878a5c1757e27f1b",
".git/objects/e0/5d2eca192d68a6042894e787eb5ae83d76c5c2": "575b9685878f2e0b65a49ef08a1301c1",
".git/objects/e0/ee9ac5311e4c1519775369f0651c44271a87a4": "73781f71a0bf27bd6c75a7124e3cdf2e",
".git/objects/e1/0093af075d1bb921aba4bf9afa1fdabbafc5f5": "b504e52f11dfc6c9459ed2acfebe5622",
".git/objects/e1/1b1d0667d23cb58733bdbca181ca8ccc1d833e": "01cbf4ca98a99f49f97fc7ae9ef12110",
".git/objects/e1/c9f8dd035688dda511cffaf8d9b5394a40b087": "22af7f3e22b01a627f8277986f288cec",
".git/objects/e2/d816cbed372f320c1897695f8edf82e3f819f6": "8eeaeceec249d8813b815318a204be1c",
".git/objects/e6/0a373bd94bd12cf3abfb6482711557166bbb88": "028f69af8a8d93c7284634ce172d343e",
".git/objects/e6/98ebc4cf76173274f634b0b7003b2f2f82d543": "35f9c90428a8f3fd0dae3a35e7cc6000",
".git/objects/e7/87d9e1fbed4b0e74f57672099b21d91735c85f": "6ab0f4e46d49541a7bc19934ba8327ea",
".git/objects/e7/deba78a9d023da600b4668dccde98bed729a53": "589e6d641520ff0f6b4fcf9ae6716544",
".git/objects/e7/ef3c4da607eb8d39893da04db1e16b4bd56895": "86701158d4ee4a840def45d1d7a95820",
".git/objects/e8/2606b577a4007a3db135263c30c20127a3af44": "f94e00930d18903ae37e3a8c47c70c1d",
".git/objects/ea/70068275e9e4d2a40a9528853ec69cfae0d6aa": "131fa914224114e4c8ea8e9bba3bcb36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ce5d75da6f8a1d08c75f53da3e602e0fb5c9ce": "7ab3c84c75791d64e713fd4b844550b8",
".git/objects/ed/7cda46d7ccf5202ea5a2ec64151ce967512b68": "0acea4506e8087dd0f095263e0a30ea0",
".git/objects/ee/74409de72adcb3f07320eefb371ea54ef2bb4f": "d3adca843770e76ce48769e13d46430b",
".git/objects/ef/3b93b78d0c82507c5132eab7dd7544fa12939a": "86ba8859850179548f40a37298e0df87",
".git/objects/ef/83e6711773254f6e7e066f576286467366cb52": "b525854d70453f773442124675b5d283",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/ab259ed0bdbd409b7e6d35e7332da9239e8cb7": "fcd296d9f65bb7c9397164f7906dd033",
".git/objects/f7/f184af9a7887fae9f394615fc2b2a75f2a64ca": "c01868d22beb2c6c6617199cee9411ae",
".git/objects/f9/5990376a6cfe2aea833bbf4498044569adeefe": "9f6d20052466551acffe36aa1031033b",
".git/objects/fd/f28cfd8323d2834d10e47848c2ecd0090b86cb": "e3f585770e63fe713711552b496b451a",
".git/objects/ff/3e7943a2e0067994fabfcc9d75530cd820e196": "d32f51d10a9385c3a3b52191e633b5bc",
".git/refs/heads/main": "674619709d72d0dfeaa403849637c695",
".git/refs/remotes/origin/main": "674619709d72d0dfeaa403849637c695",
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
"flutter_bootstrap.js": "2112cac7f2aee3e8f872a2945d090cea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3129b2e4da844be4a60f9bdf850aa21",
"/": "b3129b2e4da844be4a60f9bdf850aa21",
"main.dart.js": "af02e9399e8bd6abd2f39b89071b307c",
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
