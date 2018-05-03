---
layout: post
title:  "How I Optimized My Website for Amazing Performance Results"
date: '2017-04-12'
categories: blog
---

Website optimization has become an essential part of web development. Numerous studies and reports have shown that for each second longer a webpage can take to load, more people will abandon the site before they see it. Another circumstance that has come into play is that search engines, such as Google, have started using page speed times as a factor for their page rankings. This could mean that having a slower loading website could hurt your rankings to get on top of search results, which means less traffic. Bearing these things in mind, I wanted to test out some new methods of optimization to see how far I could push my site to achieve some great performance results.

Before we get into the how, I wanted to show the fruits of my labor upfront. Below you'll find three reports from performance measuring websites.

## Lighthouse Report

First off is a performance report from Lighthouse, which can be run using Chrome DevTools. If you're looking to make sure your Google rankings don't get hurt by your performance, you'll want these numbers to be as high as possible. IamBramer received nearly a perfect score across the board, only taking a hit in performance due to the fact that I didn't inline critical CSS as the effort to do this didn't seem worth it.

<p class="blogImage"><img class="lazyload border-gray" alt="IamBramer Website Lighthouse Report"
src="https://res.cloudinary.com/iambramer/image/upload/e_blur:600,dpr_auto,f_auto,q_80,w_100/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg"
data-srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 1900w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 1400w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 1000w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 400w">
  <noscript>
  <img alt="IamBramer Website Lighthouse Report"
    src="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg"
    srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 1900w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 1400w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 1000w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525301555/iambramer-website-lighthouse-report_dkv90r.jpg 400w">
  </noscript></p>

## GTMetrix Report

One of the biggest sites for running performance tests is <a href="https://gtmetrix.com/" target="_blank" rel="noopener">GTMetrix</a>, so lets take a look at the report generated from them.

<p class="blogImage"><img class="lazyload border-gray" alt="IamBramer Website GTMetrix Report"
src="https://res.cloudinary.com/iambramer/image/upload/e_blur:600,dpr_auto,f_auto,q_80,w_100/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg"
data-srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 1900w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 1400w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 1000w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 400w">
  <noscript>
  <img alt="IamBramer Website GTMetrix Report"
    src="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg"
    srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 1900w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 1400w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 1000w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525304363/iambramer-website-gtmetrix-speed-report_ft5idd.jpg 400w">
  </noscript></p>

We're getting a great PageSpeed score and the load time is great as well as the page size. However, the YSlow Score doesn't seem to be so great, let's take a closer look.

<p class="blogImage"><img class="lazyload border-gray" alt="IamBramer Website GTMetrix YSlow Score"
src="https://res.cloudinary.com/iambramer/image/upload/e_blur:600,dpr_auto,f_auto,q_80,w_100/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg"
data-srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 1900w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 1400w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 1000w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 400w">
  <noscript>
  <img alt="IamBramer Website YSlow Score"
    src="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg"
    srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 1900w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 1400w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 1000w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525304369/iambramer-website-gtmetrix-speed-report-yslow_ce7mul.jpg 400w">
  </noscript></p>

  YSlow is reporting that we have no expires headers, we aren't using a CDN, and that we have too many HTTP requests. This site is being deployed using <a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a>, which users a header to cache the entire site, and then uses cache-invalidation with versioning for clearing out the cache and updating, so I know that I can ignore this red flag since the site IS caching.

  I also know that Netlify uses a CDN for delivering its content, YSlow just doesn't seem to recognize the CDN, so this is another red flag I can ignore.

  Lastly the downgrade for having too many HTTP requests is (at least to my knowledge) a debatable topic. Since HTTP/2 has become mainstream, you can push numerous files, such as .js files, at the same time. Before with HTTP, requests were asynchronous, which meant you could only send one file at a time, which would cause delays in loading. So we can choose to ignore this as well since this isn't really affecting our load times.

## WebPageTest Report

Another very prominent site for performance testing is <a href="https://www.webpagetest.org/" target="_blank" rel="noopener">WebPageTest</a>. You can choose to test on a large number of different devices in different locations which makes it great for checking cross device optimization.

<p class="blogImage"><img class="lazyload border-gray" alt="IamBramer Website WebPageTest Report"
src="https://res.cloudinary.com/iambramer/image/upload/e_blur:600,dpr_auto,f_auto,q_80,w_100/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg"
data-srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1900w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1400w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1000w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 400w">
  <noscript>
  <img alt="IamBramer Website WebPageTest Report"
    src="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg"
    srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1900w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1400w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1000w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 400w">
  </noscript></p>

Seeing all A's across the board certainly makes you feel great after putting in a lot of effort to keep things fast. You might also notice that the first load time of the site was averaging 1.462s, with the second load averaging .92s. This is thanks to the service worker and browser caching!

## It Starts With Static

A big part of how I was able to get things to be so optimized and fast is because the entire website is static. Nothing is being pulled from a database or built when the user visits, it is all static pages and content. This is thanks to a static site builder called <a href="https://jekyllrb.com/" target="_blank" rel="noopener">Jekyll</a>.

With Jekyll you can build templates and with a few console commands, it will build static pages for you in a matter of seconds (or minutes if your site is really big). One of the reasons having a static website can have such a big impact on performance is because more content can be cached (nearly all of it).

## Serving Images from the Cloud

**Image optimization is one of the biggest parts of decreasing web page size**. Smaller size, means faster loading. Thanks to an online image delivery service called <a href="https://cloudinary.com/" target="_blank" rel="noopener">Cloudinary</a>, I can serve optimized images with ease. This was important for me because I'm using the image property `srcset` which allows you to deliver a different image depending on the screen size.

Since I'm using `srcset`, I actually need at least four sizes of every image that I'm displaying. There are some command line tools that you can use for automating this process, (I did it for <a href="https://insightcreative.com/" target="_blank" rel="noopener">Insight Creative, Inc</a>'s website using <a href="https://gulpjs.com/" target="_blank" rel="noopener">Gulp</a> and <a href="http://www.graphicsmagick.org/download.html" target="_blank" rel="noopener">GraphicsMagick</a>) however image management starts to become a problem and the amount of disk space that gets used gets to be pretty hectic. So instead of having to deal with the headache, I can use Cloudinary to deliver resized, optimized images in their best formats based on the users device and browser! Here is an example of an image tag for this site:

```html
<img class="lazyload border-gray" alt="IamBramer Website WebPageTest Report"
src="https://res.cloudinary.com/iambramer/image/upload/e_blur:600,dpr_auto,f_auto,q_80,w_100/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg"
data-srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1900w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1400w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 1000w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525305589/iambramer-website-webpagetest-performance-results_bc03hq.jpg 400w">
```

If you want to know more about image optimization this is a great place to start: <a href="https://images.guide/" target="_blank" rel="noopener">https://images.guide/</a>.

## LazyLoad Those Images

LazyLoading is the process of letting the main HTML DOM load and then loading the assets you want after the page has finished rendering. Since images are usually pretty data heavy and will slow down the page from rendering, it can be a good idea to LazyLoad them so they don't begin transferring until the user at least has a functioning page.

The way I decided to approach this was to have a very low quality image load initially with the page, then LazyLoad the high quality image only when they were needed. I accomplished this with <a href="https://github.com/aFarkas/lazysizes" target="_blank" rel="noopener">lazysizes</a>. By putting the low quality image in the `img src` attribute, it loads with the intial request, then the `data-srcset` determines which high quality image to load in once the image is in (or near) the viewport.

With the advancements in the Intersection Observer API, I may look at switching from lazysizes as it could have better potential performance.

## Hold the Java

Another way to help speed up the initial page load is to defer your javascript files. By adding the `defer` attribute into the `script` tag, you are telling the browser to wait till the DOM has finished rendering to request the javascript files. Since javascript files are usually the second biggest data files (after images) on a website, telling them to wait till the initial page has loaded helps speed things up.

## Robotic Assistance from Service Workers

Besides browser caching, you can also setup what is called a service worker to cache your content. A service worker even has the ability to display a functioning website to someone who has it cached when they no longer have an internet connection (offline). Honestly, my knowledge of service workers is just valid enough for me to squeak by, so if you want to learn more about how to use them I'd start with <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank" rel="noopener">Google's documentation</a> on them.

If you open up your console on this website you should see a line that reads, **IamBramer service worker running** which means that little robot is doing his thing!

<p class="blogImage"><img class="lazyload border-gray" alt="IamBramer Website WebPageTest Report"
src="https://res.cloudinary.com/iambramer/image/upload/e_blur:600,dpr_auto,f_auto,q_80,w_100/v1525316839/iambramer-website-service-worker_f2k9dt.jpg"
data-srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 1900w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 1400w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 1000w,
https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 400w">
  <noscript>
  <img alt="IamBramer Website WebPageTest Report"
    src="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525316839/iambramer-website-service-worker_f2k9dt.jpg"
    srcset="https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1600/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 1900w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_1200/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 1400w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_800/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 1000w,
    https://res.cloudinary.com/iambramer/image/upload/dpr_auto,f_auto,q_auto,w_400/v1525316839/iambramer-website-service-worker_f2k9dt.jpg 400w">
  </noscript></p>


## Remove Unecessary Bloat

Another way to improve performance is to keep unecessary bloat off the site. Figure out the things that you really want/need in order to acheive your goal, and remove anything that doesn't add the value that it costs in performance. I have a few javascript files to add some user experience and interaction to the site, but I kept them lightweight and didn't go overboard. It can be really easy to add to many 'enhancements' to a site that just bog it down and don't really add much value.

## Summary

As far as measuring metrics goes that pretty much covers the majority of what I've done. The other things that you need to consider are:

- Follow good web practices and use proper coding markup
- Find a good web host that provides good uptime and quick response times
- Don't just go with the first thing you try, test to see what works better
- Ask for support when you need it. It's impossible to know everything, so when you aren't sure about something, find someone who's an expert at it and ask them!

I hope some of the things that I learned and utilized will be of help to you in the never ending cause of website optimization.
