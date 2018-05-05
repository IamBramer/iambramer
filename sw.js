/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/main.css","401d40f1297c818687a38f62f26eea57"],["googlebb4dc081bcd53106.html","62c5f06ee994ef95efcf087d9317a087"],["img/about/atom.svg","8081ead1b237fab24b0546ba1b49dbba"],["img/about/bitters.svg","3c6dae8cdabcea474a5898a3c8ddadf8"],["img/about/github-pages.svg","fb0b25c2794e8f6a2a1bf6ddef00db88"],["img/about/github.svg","cf504363669d616a46c7316e54d4dac0"],["img/about/gulp.svg","5c883f937c92fbac3cd133de9093b591"],["img/about/jekyll.svg","d141de3e2982a7916f43b04710e72d7c"],["img/about/neat.svg","0c338ae100a71381508e138506f5815a"],["img/about/tyler-suit.png","70d4fc25eb40f22554fa189fc527b10e"],["img/android-icon-144x144.png","96a3790d90f6e151e488659155e1ff7a"],["img/android-icon-192x192.png","a30a295bdd526efc16b683bd42be7422"],["img/android-icon-36x36.png","66d7a6aa9796682591adf5e3c033f5f7"],["img/android-icon-48x48.png","d7ad3051cb5fad15a2d1ee09f01ffe6a"],["img/android-icon-72x72.png","b6539fa84fec2b725d53712b619ed0c0"],["img/android-icon-96x96.png","241e01ae5eb6a2dbe3189ca8f986b26a"],["img/apple-icon-114x114.png","7ed702c1b9d10382069e4d3b83f7ce1a"],["img/apple-icon-120x120.png","71987bc70e6103e00b4b310a2bece4b5"],["img/apple-icon-144x144.png","96a3790d90f6e151e488659155e1ff7a"],["img/apple-icon-152x152.png","293c61f83f9e19b714f31acd846740b1"],["img/apple-icon-180x180.png","03a89d984a120fcbcf161dd34d499117"],["img/apple-icon-57x57.png","8c40c90e174c398e82351f064c763525"],["img/apple-icon-60x60.png","3e24622c23a3b6a0dfad82aff5d1f126"],["img/apple-icon-72x72.png","b6539fa84fec2b725d53712b619ed0c0"],["img/apple-icon-76x76.png","a189c2b75c78ea329c23f714a954ab1b"],["img/apple-icon-precomposed.png","217a025ca81a75491bad3a1d39528ab3"],["img/apple-icon.png","217a025ca81a75491bad3a1d39528ab3"],["img/blog/how-i-optimized-iambramer-for-amazing-performance-results/iambramer-website-gtmetrix-speed-report-yslow.jpg","9acf1f7ff1c7e649e462fb9df2114aac"],["img/blog/how-i-optimized-iambramer-for-amazing-performance-results/iambramer-website-gtmetrix-speed-report.jpg","93cebea494e42a4089503a1936566cfb"],["img/blog/how-i-optimized-iambramer-for-amazing-performance-results/iambramer-website-lighthouse-report.jpg","476bbdf9130ccec3195cbcfcd648cebe"],["img/blog/how-i-optimized-iambramer-for-amazing-performance-results/iambramer-website-service-worker.jpg","a72bc01e541a5b62eeabc98b39b512a9"],["img/blog/how-i-optimized-iambramer-for-amazing-performance-results/iambramer-website-webpagetest-performance-optimization-chart.jpg","911a3067f037c86fd275d2125df318c1"],["img/blog/how-i-optimized-iambramer-for-amazing-performance-results/iambramer-website-webpagetest-performance-results.jpg","825f5e87d7d5fd0c7e22e3b29f2ae622"],["img/browserconfig.xml","97775b1fd3b6e6c13fc719c2c7dd0ffe"],["img/favicon-16x16.png","b3f1685fe64bd2c645128bfdea57f3df"],["img/favicon-32x32.png","3a1a987ee2cd4723634daac518374740"],["img/favicon-512x512.png","ce8eee3d655c5f0b7bab0df062a19018"],["img/favicon-96x96.png","241e01ae5eb6a2dbe3189ca8f986b26a"],["img/favicon.png","0ce3ad823b658947d784537eddac57a1"],["img/iambramer-logo.svg","74ffd9ba11719455f135b9307a19efe1"],["img/icons/3d.svg","ad503c09be881e057906bb2f92211a63"],["img/icons/camera.svg","3e8be2cb2e9714e05a3aed7bc788c82b"],["img/icons/computer.svg","903cd7572e9eb806a00209d8c62583cd"],["img/icons/palette.svg","1c3e37fc2ce77aed7935c14fc14fe123"],["img/icons/print.svg","9e97433b1c6fc6c595916f0d183ed79e"],["img/icons/website.svg","946dda4cccfc42225411db9add0198de"],["img/ms-icon-144x144.png","96a3790d90f6e151e488659155e1ff7a"],["img/ms-icon-150x150.png","118974c3e822ffbcfe1dda89d025976c"],["img/ms-icon-310x310.png","9717b98cdfcf77e65d4d6a7464ae9483"],["img/ms-icon-70x70.png","38611a38b773557882251f22d2533ece"],["img/projects/007-brewing/007-brewing-1.jpg","d4db2c1f8c95d85151a9d4cabfcd2a27"],["img/projects/007-brewing/007-brewing-2.jpg","d16bcbe3bd1ae4c492fd01dc240a9640"],["img/projects/007-brewing/007-brewing-3.jpg","573ec9b4da6a0703645789087f538562"],["img/projects/007-brewing/007-brewing-4.jpg","a6fe62b21a436852396834b373e7f867"],["img/projects/007-brewing/007-brewing-5.jpg","d4093646c9555ba2becebc2e2cf97ff3"],["img/projects/007-brewing/007-brewing-6.jpg","f43583ba0b91cdf91f876d3ab7302b85"],["img/projects/2016-resume-design/2016-resume-design-1.jpg","6be8f18b851a7fe1f7d175682ee6af14"],["img/projects/2016-resume-design/2016-resume-design-2.jpg","c5d74c06e1937d2e2fc33929291e6032"],["img/projects/2016-resume-design/2016-resume-design-3.jpg","5ba8dff573628116b26b5227fa8c63be"],["img/projects/2016-resume-design/2016-resume-design-4.jpg","8b37df7eb5d2c34b21311e3863be24e9"],["img/projects/2016-resume-design/2016-resume-design-cover.jpg","f8f4fde06a2bbf86bfcf617b6cf7f9c6"],["img/projects/animation-collection-no-1/animation-collection-no-1-cover.jpg","0c6878090aa5407a0ac52855d1189da6"],["img/projects/bramer-photography/bramer-photograph-business-card-1.jpg","fa0d8a17af47b04120b46d6beed5116a"],["img/projects/bramer-photography/bramer-photograph-business-card-2.jpg","864ff4729f1652acc14042c173e7c510"],["img/projects/bramer-photography/bramer-photograph-business-card-mockup.jpg","e836a8365ad1c69992aa14c43cd6b4a5"],["img/projects/bramer-photography/bramer-photograph-logo.jpg","59b58db6067772fa4a0c508a9aeb0483"],["img/projects/bramer-photography/bramer-photograph-order-form.jpg","877b5097887e25edeb3f8685018ebdd7"],["img/projects/bramer-photography/bramer-photograph-print-mockup.jpg","da3473fc1ed5e1361aabb23327427b37"],["img/projects/bramer-photography/bramer-photograph-shirt.jpg","7a8b1f874d7fd1d13c91c6c9d8246725"],["img/projects/bramer-photography/bramer-photography-cover.jpg","974221822920422b5e340aa1983a9d3d"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-1.jpg","bdc69fa752abe2478b11a63478ddbf60"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-2.jpg","f4893cff806838d8b586021ca69999b6"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-3.jpg","7f55c8ef557879fcbdba200726863345"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-4.jpg","4d38d7a5717b5b723ee35fc7573ef219"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-5.jpg","7e350d4943e1a787527d32d81056d9ae"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-6.jpg","4fef559cfde46153947695dd86e0f5d2"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-7.jpg","78ec9c06ae44c2d6b6eddbc19db3706f"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-8.jpg","72e4eea4aa8d99251272b9dc9cbdff0b"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-9.jpg","f8228451b85c3092c6477e4257064c58"],["img/projects/dodge-dart-brochure/dodge-dart-brochure-cover.jpg","881083377c39e227361a5830a0c84912"],["img/projects/fmub-online-ads/fmub-online-ads-bee.jpg","ce3f12900b9cdc549741ac4a64e1a92f"],["img/projects/fmub-online-ads/fmub-online-ads-dino.jpg","a73aa4c19443eea8c2dbb04b0eca5aa1"],["img/projects/fmub-online-ads/fmub-online-ads-mockup.jpg","d516ffbffb61294fb25c9f7599ffd72e"],["img/projects/fmub-online-ads/fmub-online-ads-snake.jpg","f704c8f72e0f2c187ed865144df9cc43"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-andromeda-spread.jpg","e246f06f0cea6650dbda15ca67726530"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-billboard.jpg","ab119e26bba05fb19ff3a4e5afee241f"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-cover.jpg","9666ccdca9692794e89b8406e56f7e3d"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-gemini-spread.jpg","0b2f0c8dafda11b32ae9cdaab0bb9fa7"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-hubble-spread.jpg","a24bb39c66f24aa12c8afa494934f1c2"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-teaser-ad.jpg","dff22cfb2475cee5fd68f0f5385c8b22"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-tradeshow.jpg","ae901c2956e8a4021f0890ba3f9ea0f8"],["img/projects/ge-discovery-constellations-concept/ge-discovery-art-concepts-xeleris-website.jpg","3787e213fb2309ccfa6af08dd9611684"],["img/projects/ge-discovery-constellations-concept/ge-discovery-constellation-concept-initial.jpg","97d6baea9e9d9ab8c265acf23964852b"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-initial.jpg","db56d61ad118d62594acb4b41c166cb4"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-pet-ct-brochure.jpg","dba1fe4526815a8456fe14a5e746df73"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-pet-ct-spread.jpg","4cd43329e1201135811e9c9cb64a9567"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-spect-ct-brochure.jpg","ec6d397acd30363e6a4ea0fa59ac53ff"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-spect-ct-spread.jpg","c2e630414d9e149df6b320cc2bcd3a25"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-teaser-ad-2.jpg","63ae75733f66fe202da5c1d4cef9be0d"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-teaser-ad.jpg","367540aa9e1e9ef79b6ba5318e2787cb"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-value-prop.jpg","51e53c39ff2c2f327c765c0cb9d68269"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-xeleris-brochure.jpg","caf29b7875b2cee0ac9363c3c526553e"],["img/projects/ge-discovery-elegance-concept/ge-discovery-elegance-concept-xeleris-spread.jpg","b352027506a747af19bf34e51a84e30c"],["img/projects/ge-giraffe-incubator-digital-concept/Digital_0000_Main Screen.jpg","d16c8a78576075602983d7e5609658f0"],["img/projects/ge-giraffe-incubator-digital-concept/Digital_0001_Email.jpg","c106d44296e4d926b6481610e1b92728"],["img/projects/ge-giraffe-incubator-digital-concept/Digital_0002_Training.jpg","5bed53bac6dcf0a4937e9fabe0268fa1"],["img/projects/ge-giraffe-incubator-digital-concept/Digital_0003_Cover.jpg","da53c7fc391b95ab4dd77b013522b6be"],["img/projects/ge-giraffe-incubator-digital-concept/Digital_0003_Rollout.jpg","016311d3823d907d09d99ae09881fcce"],["img/projects/ge-giraffe-incubator-steps-concept/Steps_0000_Art Direction.jpg","2ab7080d105bdfa478afb9f9f3beb275"],["img/projects/ge-giraffe-incubator-steps-concept/Steps_0001_Teaser.jpg","889ad1b669322141099949a1e98396fd"],["img/projects/ge-giraffe-incubator-steps-concept/Steps_0002_Sales Event.jpg","ee918f4226323d0e67a274f0dc333a96"],["img/projects/ge-giraffe-incubator-steps-concept/Steps_0003_Rollout 1.jpg","b16c9422d4dd4460e1bc1dd4d323f616"],["img/projects/ge-giraffe-incubator-steps-concept/Steps_0004_Rollout 2vb.jpg","64f7f156c3e64e943c32aeba770d026f"],["img/projects/ge-signa-pioneer-ad-concept/ge-signa-pioneer-ad-concept.jpg","7183f330f6c87baf545c7cc3968f2224"],["img/projects/ge-signa-pioneer-ad-concept/ge-signa-pioneer-ad-cover.jpg","32ceb89345d41a80a9c652e1da6f84c6"],["img/projects/imbio-branding-concepts/Advertising.jpg","5801e084734665ea7dcbd348b04b62e4"],["img/projects/imbio-branding-concepts/Art Board.jpg","37b58c4b393e87b95a68d44d1c5b809a"],["img/projects/imbio-branding-concepts/Art Direction.jpg","e78768310b90503846bdd2d83f6abefd"],["img/projects/imbio-branding-concepts/BiomarkerArt Board.jpg","17a45c85d52301bfa8f9f64ed4ac22c3"],["img/projects/imbio-branding-concepts/Hero Image v2.jpg","27ce385116ffb45c11879be4e22dc3b0"],["img/projects/imbio-branding-concepts/Hero Image2.jpg","ccb02a8cc9e823f89a4595a47370e9e2"],["img/projects/imbio-branding-concepts/Image Treatment v3.jpg","d5605d5231cf2380bcdfefd4a6012502"],["img/projects/imbio-branding-concepts/Image Treatment v6.jpg","362e97938ee9ddfbb99b229531c76fd5"],["img/projects/imbio-branding-concepts/Imbio Logo RGB_Horizontal.png","8716a62cf28706b832a56200b55f66d6"],["img/projects/imbio-branding-concepts/Logos.jpg","740a0dcf6335485a73e8bce4c030c40f"],["img/projects/imbio-branding-concepts/Text Storyboard.jpg","bd95ca1d59a8434b8a26ee242c1697fb"],["img/projects/imbio-branding-concepts/The Biomarker.jpg","8d6bd294bcf49626ad457c46f60a5b10"],["img/projects/imbio-branding-concepts/imbio-branding-concepts-cover.jpg","67e9f4cc26bd3240e164340dd9ca4021"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-back.jpg","dbb5897a32dc553a137070bbd015b9d4"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-comparison.jpg","c41fd28f2f3ebaeb78baafa7968fb7d9"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-cover.jpg","878582025bd2a8a30e9ada8634ec78fc"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-front-back.jpg","03f871213b6ba9991c78b6245775253a"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-front-beans.jpg","daafd96ecf0b5597bc311ca59911298d"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-front.jpg","9966940bc3bece43f6cfe91b969177a1"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-logo.jpg","b70238a7ccc26217d3f7490f4243003a"],["img/projects/insight-christmas-gift-2016/insight-christmas-gift-2016-spilled.jpg","d4ea1f604ed93f8d49902e7b809a1d59"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-andrea.jpg","c0af5d829b25805f4fe1c4a4490c25b9"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-andy.jpg","d77e774fdcb83497b1175c53e0ebf0bd"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-bart.jpg","db712556dd91c853835cf49ff8048906"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-cindy.jpg","20363df4488167744b453243e032a569"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-cover.jpg","073514d7472a9585f29ec611e165d369"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-emily.jpg","14279638955d895ac1c12c3d9a5da5e8"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-jay.jpg","0d4e17aa4b41cf29ced96b820eab8fec"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-jen.jpg","36b365ba3451da292f7ddd5b621b8ba6"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-jennifer.jpg","e064e8276f02141ab150a9f631f63cde"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-jenny.jpg","b10edfca29e451b1418f3e7fa3779e2e"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-jim.jpg","e8b663cb1acde8d77b269d6a609c5a54"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-lacy.jpg","e11da453038ee3e3b76dd1b8522688ba"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-molly.jpg","33d9402ecb40910c80566118ee51449d"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-niki-jen.jpg","7fb5f9956beb171c3b7b6cbbba0fd366"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-niki.jpg","807c18ad6c6331d93cf8b494b1740ab6"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-stacy.jpg","149962328bbff03a976c72234438fa16"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-tyler.jpg","128257a952f8f1fce986430326b5970a"],["img/projects/insight-creative-employee-door-signs/insight-employee-signs-zane.jpg","6caaf0f96097af9dc1b7a8cd82c47123"],["img/projects/insight-website-portraits/insight-website-portraits-cover.jpg","3afeaf6bc558981308632683cf06b9c0"],["img/projects/insight-website/blog.mp4","a384c88782b60a0ac17f3b996858d6a7"],["img/projects/insight-website/culture.mp4","d039dfce61e3f0bbc502cb12936ef248"],["img/projects/insight-website/home.mp4","ab2678d5959b9874f913077e59ff8117"],["img/projects/insight-website/insight-website-cover.jpg","f9aea264653ad4a6b2f04aab48109268"],["img/projects/insight-website/insight-website-home-page.jpg","0fc9d75af9a588701ff4b456220eff1b"],["img/projects/insight-website/insight-website-play-page.jpg","77c5ebe70890acf5f2a40847747a92c6"],["img/projects/just-north-of-jam/just-north-of-jam-business-card-1.jpg","5388719e46d132b4b06184b6883befc1"],["img/projects/just-north-of-jam/just-north-of-jam-business-card-2.jpg","9c620f7c408438975e588e64ffd6ecf0"],["img/projects/just-north-of-jam/just-north-of-jam-cover.jpg","794f8649222482fd2d8ee74f30be6759"],["img/projects/just-north-of-jam/just-north-of-jam-letterhead.jpg","a76aecfe85906ff24e148fc662418f4f"],["img/projects/just-north-of-jam/just-north-of-jam-logo.jpg","5c8cbca1ea28e4da1ff3afd921db9cbf"],["img/projects/just-north-of-jam/just-north-of-jam-mockup.jpg","9a31fe46846cfc4d96e57a0e050e553b"],["img/projects/jwd-creative-website/Blog Article.jpg","9fa353688609c0a2ef31348eae9e918b"],["img/projects/jwd-creative-website/Blog Video.jpg","24ec670b564cd54e9b0c90e74bc3c831"],["img/projects/jwd-creative-website/Blog.jpg","3f7f68f265b0e0e1180c8b73a8f3be01"],["img/projects/jwd-creative-website/Contact Us Email.jpg","5a37b0627383ba008f4e6fd6b0231f7b"],["img/projects/jwd-creative-website/Individual Project Open.jpg","03ade8cc0e9a5f49af18f87373b592f7"],["img/projects/jwd-creative-website/Project Grid Hover.jpg","2b84b1295f04a177bdfe95d0a7865bf5"],["img/projects/jwd-creative-website/Start a Project Highlight.jpg","2207a4e188c6cbd53d753b8aa424edaf"],["img/projects/jwd-creative-website/Studio.jpg","b3474ce305c7c0eaf59788bf1e29b138"],["img/projects/jwd-creative-website/jwd-creative-website-cover.jpg","f147ef068c9daacecd76d796ef825473"],["img/projects/landscape-associates-website/landscape-associates-website-assorted-devices.jpg","20832b78d7e4fcfe7b46290d275af378"],["img/projects/landscape-associates-website/landscape-associates-website-cover.jpg","3efaf10c69642a8b44bfc4c6d9ab8976"],["img/projects/landscape-associates-website/landscape-associates-website-home-page.jpg","37af4c3e058e868facd79e62f0eb55db"],["img/projects/max-r-website/max-r-website-cover.jpg","10488a8c8236709913c5e53d54d6239a"],["img/projects/max-r-website/max-r-website-desktop.png","4445661cbd8648188fb761d68f74e504"],["img/projects/max-r-website/max-r-website-filter-1.jpg","bbf2341c7bd836d12a928501c1e8e076"],["img/projects/max-r-website/max-r-website-filter-2.jpg","d4d6936ce599a12cdb30f7e6eb23508a"],["img/projects/max-r-website/max-r-website-filter-3.jpg","23cf6f2ecb66e02d787b55ff929e3841"],["img/projects/max-r-website/max-r-website-homepage.jpg","eab54429d2700c2196acc6473cb1afae"],["img/projects/max-r-website/max-r-website-individual-product.jpg","54bce68558d3c5e6230fa98bb06b48c3"],["img/projects/max-r-website/max-r-website-mobile.png","cda7692f2f97b916c48906de002ef87c"],["img/projects/max-r-website/max-r-website-our-story.jpg","114ae1f6ff8f325c082e0ec0634a0e3a"],["img/projects/nick-fiori-headshots/nick-fiori-headshot-1.jpg","788e5319d4f3ac4926849c518a346230"],["img/projects/nick-fiori-headshots/nick-fiori-headshot-2.jpg","03fca45487dba1e5376d1d3074bf4d26"],["img/projects/nick-fiori-headshots/nick-fiori-headshot-3.jpg","8efe5159f885caf8aa418aa3e23436aa"],["img/projects/nick-fiori-headshots/nick-fiori-headshot-4.jpg","5ad0bdc25a570d598a4f71cf15848110"],["img/projects/nick-fiori-headshots/nick-fiori-headshot-cover.jpg","3d129b6d114aa4d0479ca8b5c8bb08de"],["img/projects/portfolio-booklet/portfolio-booklet-1.jpg","734c80c73d8d80fce349ccf7b8e902b3"],["img/projects/portfolio-booklet/portfolio-booklet-10.jpg","7241a7e2e1159a8757aac2bf60502ea4"],["img/projects/portfolio-booklet/portfolio-booklet-10a.jpg","47154dbcfca20498ec653541bd4e4d09"],["img/projects/portfolio-booklet/portfolio-booklet-11.jpg","979d6ebff0ce89a3756f1ccb946574f4"],["img/projects/portfolio-booklet/portfolio-booklet-2.jpg","c5effe6bff2b485294aadee072bae5ad"],["img/projects/portfolio-booklet/portfolio-booklet-3.jpg","b39166afb5659180f1336a21fbfd7333"],["img/projects/portfolio-booklet/portfolio-booklet-4.jpg","bd1a828ebfb462e7369a6b402be27655"],["img/projects/portfolio-booklet/portfolio-booklet-5.jpg","89aa0a4bab0272a697d2da2819e5acee"],["img/projects/portfolio-booklet/portfolio-booklet-5b.jpg","9308ccdc693930322bf6c7e6896521e2"],["img/projects/portfolio-booklet/portfolio-booklet-6.jpg","218eecafd2747728f8404e793542614d"],["img/projects/portfolio-booklet/portfolio-booklet-7.jpg","231c155078f472d136343beeecd5884b"],["img/projects/portfolio-booklet/portfolio-booklet-8.jpg","bed22676072ed1f010ba9b8dbc353945"],["img/projects/portfolio-booklet/portfolio-booklet-9.jpg","2c915c49152ada03bed7a7a52a135a18"],["img/projects/portfolio-booklet/portfolio-booklet-9b.jpg","833c4fdfee53dae09e9991d29dbb7ca4"],["img/projects/portfolio-booklet/portfolio-booklet-cover.jpg","ff67ff401e0165d7ef4bc25800cbec96"],["img/projects/prestige-cabinetry-website/prestige-cabinetry-website-assorted-devices.jpg","71c029d071842409a2e276c01973d2fa"],["img/projects/prestige-cabinetry-website/prestige-cabinetry-website-contact-page.jpg","3ef1f17e16b669f32a15408c84b8fa8e"],["img/projects/prestige-cabinetry-website/prestige-cabinetry-website-cover.jpg","db3715f67accaf8aa92fca3382d42091"],["img/projects/prestige-cabinetry-website/prestige-cabinetry-website-home-page.jpg","1d4c63e7551ff1a0c2517022d10db3dd"],["img/projects/render-collection-no-1/project-1-cover.jpg","e0306d48cae6ef4aa4195824b7f1b9c3"],["img/projects/render-collection-no-1/render-experiment-no-1-image-1.jpg","586be541f136426d28242b57274bbe33"],["img/projects/render-collection-no-1/render-experiment-no-2-image-1.jpg","ad97936c6c6ef25aa421e2fb1149ebe2"],["img/projects/render-collection-no-1/render-experiment-no-3-image-1.jpg","1ae7db7d5c275b1f3290076426e8d3cd"],["img/projects/render-collection-no-1/render-experiment-no-4-image-1.jpg","929efe3c82379814ada980342ce0bb55"],["img/projects/render-collection-no-1/render-experiment-no-5-image-1.jpg","33a6408c0d2a9d4ec8ad52fecb396442"],["img/projects/render-collection-no-1/render-experiment-no-6-image-1.jpg","fc4b54e5f39309ddd3b40d07f7a86a9e"],["img/projects/render-collection-no-1/render-experiment-no-7-image-1.jpg","a14c929a140b9336e797bb6f06530d1e"],["img/projects/render-collection-no-1/render-experiment-no-8-image-1.jpg","dbaa1dfb5ded29fa6686da5242dae1b5"],["img/projects/river-valley-bank-50th-anniversary/rvb-50th-cover.jpg","8823a1fe3384f2d05058754d0df14eb9"],["img/projects/river-valley-bank-50th-anniversary/rvb-50th-logo.jpg","ce77685ed436e22aded44826e938647d"],["img/projects/river-valley-bank-50th-anniversary/rvb-50th-print.jpg","92d23b46a2770034bd235123caa11f16"],["img/projects/river-valley-bank-50th-anniversary/rvb-50th-website-headers-mockup.jpg","716a891aa93f54b433eba5b4855f7820"],["img/projects/river-valley-bank-50th-anniversary/rvb-50th-website-headers.jpg","63b0257ee888f4a9ece4a812c35a7b63"],["img/projects/thermo-scientific-brochures/TFS-Dionex Aquion-IC-System-Brochure.pdf","161843e7e0af620074c6d2e700cd17f3"],["img/projects/thermo-scientific-brochures/thermo-scientific-brochure-2.jpg","ba63b9cf80a2cc0357f5491c4bd6cac1"],["img/projects/thermo-scientific-brochures/thermo-scientific-brochure-3.jpg","12cedec969c3f28e1046c32e4cab7b68"],["img/projects/thermo-scientific-brochures/thermo-scientific-brochure-cover.jpg","77cecf1604779482be795b61034c966c"],["img/projects/thermo-scientific-concepts/thermo-scientific-concepts-cover.jpg","ae799e427c2e45fa731e07a30dd58fd5"],["img/projects/thermo-scientific-concepts/thermo-scientific-real-problems-artboard.jpg","4549ff850f6402d18b19dd378ba8d3f5"],["img/projects/typography-posters/band-of-brothers.jpg","45ba593bc2eaaf889299f2d96530149c"],["img/projects/typography-posters/blood-sweat-tears.jpg","11866b453622875ece59246a73ef0e09"],["img/projects/typography-posters/chivalry-is-dead.jpg","10234ff18f8c692b61d5efd02e06ab11"],["img/projects/typography-posters/fight-back.jpg","4701ed9551a960be248ae04e25990921"],["img/projects/typography-posters/keep-swimming.jpg","525ff4ff1476f3a93e0ff76a8fc8710b"],["img/projects/typography-posters/life-goes-on.jpg","33e121b7cd5ac3c7bc411b6b89602dcb"],["img/projects/typography-posters/stay-strong.jpg","69a71ba76236ba54eba43927c38a9267"],["img/projects/typography-posters/the-pacific.jpg","0e4eefa3d5440e6520028627d637ec7d"],["img/projects/typography-posters/typography-posters-cover.jpg","d03ee061c8485b87b8962fe8810565d6"],["img/projects/uwgb-gtp-posters/ari-herstand-poster.jpg","375275a01501f8d73dfc31ff78bfac56"],["img/projects/uwgb-gtp-posters/darling-parade-poster.jpg","0352ddc5029bc098eb8d2091a3868844"],["img/projects/uwgb-gtp-posters/grave-dancers-ball-poster.jpg","743f015bc1cca60164cd1edc235cda4e"],["img/projects/uwgb-gtp-posters/headphone-disco-poster.jpg","bb412ae75b008bfc173006d675837e9f"],["img/projects/uwgb-gtp-posters/jared-mahone-poster.jpg","984124f244efa12565b9d4cf2db1c8aa"],["img/projects/uwgb-gtp-posters/jazz-orgy-poster.jpg","9cb239ec7ed5c8bc8e6cf69ef6fddf20"],["img/projects/uwgb-gtp-posters/lgbtq-sticks-and-stones-poster.jpg","a78994f92f1528e49349e90b8eade6a2"],["img/projects/uwgb-gtp-posters/michael-kent-poster.jpg","518079cfca4c41218930914713cb7fd7"],["img/projects/uwgb-gtp-posters/milwaukee-brewers-poster.jpg","9aa119c718297e3d50c20f062c93d7a9"],["img/projects/uwgb-gtp-posters/nellys-echo-poster.jpg","dbd5739a2020c418bb023b23d0668d6c"],["img/projects/uwgb-gtp-posters/teddy-geiger-poster.jpg","d96b91a092bc0b943345f6bc6ec15d8d"],["img/projects/uwgb-gtp-posters/uwgb-gtp-posters-cover.jpg","ac2938129ac6f141d35c6bbb099fe3ba"],["img/projects/uwgb-music-posters/bach-2-bach-poster.jpg","c9881ecec039572fe10160b4dab2ef9d"],["img/projects/uwgb-music-posters/chamber-singers-and-concert-choir-poster.jpg","ac078e123fb0f2f94d892cb34d094bdd"],["img/projects/uwgb-music-posters/concert-choir-and-symphonic-band-poster.jpg","77e50697df8f57489cf69f90e78cfee7"],["img/projects/uwgb-music-posters/hand-drumming-ensemble-poster.jpg","4aee7393b73a1758a5122d316fd91b5a"],["img/projects/uwgb-music-posters/hand-drumming-new-music-color-poster.jpg","c8e1c4c94dddda028e91ec4d1a272eec"],["img/projects/uwgb-music-posters/jazz-ensemble-i-and-ii.jpg","4ea126ff14e78083a32b36cab5e62e95"],["img/projects/uwgb-music-posters/symphonic-band-wind-ensemble-poster.jpg","b2e5d633874582a2b492d0dca735b30a"],["img/projects/uwgb-music-posters/uwgb-music-posters-cover.jpg","51f09d7be7bb5f03583bbc636c50f870"],["img/projects/uwgb-music-posters/vocal-jazz-ensemble-poster.jpg","907f56154966f1305aef205b9ea692bf"],["img/projects/vans-lumber-photography/Back_Exterior.jpg","dec60c4aac96c6941382dd2dd9bee038"],["img/projects/vans-lumber-photography/Bathroom1_3047.jpg","1d1c0cb5c706b4507dabb642edbe1e43"],["img/projects/vans-lumber-photography/Cortland_Kitchen 2.jpg","8a35f2b41ade8cfd73bbe90d923df74c"],["img/projects/vans-lumber-photography/EntertainmentKitchen_3250.jpg","e22b77d5b66004a3a8eb69e58548c216"],["img/projects/vans-lumber-photography/EntryWay_3211.jpg","2ce4f767aeaaca14bf3652f285503d00"],["img/projects/vans-lumber-photography/Kitchen5_3004.jpg","3082e0e49d30520770580f756f05e80e"],["img/projects/vans-lumber-photography/MasterBath3_3163.jpg","f6e8669066b56a8812e06b8a0f3e1e15"],["img/projects/vans-lumber-photography/MasterBath7_3179.jpg","fc201df574a0e8420ace0d3868f4efce"],["img/projects/vans-lumber-photography/MasterHallway_3137.jpg","df05365a993cfe08c6efb9e78e693009"],["img/projects/vans-lumber-photography/vans-lumber-photography-cover.jpg","c4b8611c4a8cbd919d912437a1a815ba"],["img/projects/vans-lumber-rebranding/vans-lumber-case-study-binder.jpg","37ada9f65bc45bc96d6448a069102ffb"],["img/projects/vans-lumber-rebranding/vans-lumber-case-study-business-cards.jpg","00b1e7798b96dc8c5bc9c77287331eeb"],["img/projects/vans-lumber-rebranding/vans-lumber-case-study-cover.jpg","359b94188cc6d2a545d1f8a3e313fc34"],["img/projects/zane-packer-fence/zane-packer-fence-1.jpg","cbbb045f2226dd1aa949ad9aef68afc6"],["img/projects/zane-packer-fence/zane-packer-fence-2.jpg","789b481beb11f6764daa18c1da97d06e"],["img/projects/zane-packer-fence/zane-packer-fence-3.jpg","a18b5d28c4b781f6314906b4dd960aea"],["img/projects/zane-packer-fence/zane-packer-fence-4.jpg","157c4a4941db8ed663a00238ace87be5"],["img/projects/zane-packer-fence/zane-packer-fence-cover.jpg","df27676dbd710abd91f0144c39270073"],["index.html","2eda4feee9274d96ecc6090e458aecc7"],["js/app.js","dbfe51d3253ab83f73102e05a36c9a31"],["js/autotrack.js","b672dbea5e65772995e18cad3dd334e5"],["js/barba.min.js","e98bade89ab648635710daa725b5fdec"],["js/bundle.js","8245d7f08fb1460b4d57340c2bc10a82"],["js/jquery-3.2.0.min.js","030f39bd83a4f14c184de9cebcd935da"],["js/lazysizes.min.js","b9a117f9520f29e7be1f18ea89a93f64"],["js/main.js","640622212cbf534545ac1de042dc86fe"],["js/modernizr.min.js","f5bffa6b431e2e7145ef108592e8adc5"],["js/pace.min.js","917b46a94a9913354bfcb3b5a6edb1ee"],["js/parallax.js","1e166f712418460712049af8ebf588da"],["js/picturefill.min.js","9f756f34689805306e0167c2614b0dbc"],["js/scrollreveal.min.js","c20163b839a6913c634cd8c57dcfa515"],["js/tilt.min.js","9cd7a12e1a30b2be43ce2dc2c6b6b67a"],["js/velocity-ui.min.js","34406852365277f18c791aba70a40d05"],["js/velocity.min.js","6bea1fdaa9474be396571dd0aa03f6ac"]];
var cacheName = 'sw-precache-v3-iambramer-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/projects/, toolbox.networkFirst, {"cache":{"maxEntries":10,"name":"projects-cache"}});
toolbox.router.get(/words/, toolbox.networkFirst, {"cache":{"maxEntries":10,"name":"words-cache"}});




