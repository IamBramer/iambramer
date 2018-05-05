var blogImages;

blogImages = document.getElementsByTagName('img');

for(var i = 0; i < blogImages.length; i++) {
    blogImages[i].onclick = function(){
      this.classList.toggle('magnify')
    };
};

var consoleStyles = [
  'background: linear-gradient(to bottom right, #68bb52, #1d9999)',
  'color: #fff',
  'display: block',
  'line-height: 30px',
  'text-align: center',
  'font-weight: bold',
  'padding: 10px 40px'
].join(';');

console.log('%c IamBramer', consoleStyles);


//This Unregisters service workers


// navigator.serviceWorker.getRegistrations().then(function(registrations) {
//  for(let registration of registrations) {
//   registration.unregister()
// } })


// Old Service worker Registration

// if ('serviceWorker' in navigator){
//   console.log('IamBramer service worker running.');
//   navigator.serviceWorker.register('/sw.js', {
//     scope: '/'
//   })
//   .then(function (registration) {
//   })
//   .catch(function(e) {
//     console.error('Error: ' + e);
//   });
// } else {
//   console.log('Your browser does not allow awesome service workers to be made.');
// }

$(function() {

      //ScrollReveal function for animating scroll elements
      window.sr = ScrollReveal();
      sr.reveal(".fade-me",
        {
          scale: 1,
          distance: "200px",
          duration: 1000,
          easing: "ease-in-out",
          delay: 0,
          viewFactor: 0.01
        },
        100
      );

      var Home = Barba.BaseView.extend({
          namespace: 'home',
          onEnter: function() {
            $('.fade-me').css('visibility','hidden');


              // The new Container is ready and attached to the DOM.
          },
          onEnterCompleted: function() {
              // The Transition has just finished.

          },
          onLeave: function() {

            // $('#container').mixItUp('destroy');
              // A new Transition toward a new page has just started.
          },
          onLeaveCompleted: function() {
              // The Container has just been removed from the DOM.
          }
      });

    var Projects = Barba.BaseView.extend({
        namespace: 'projects',
        onEnter: function() {
          $('.fade-me').css('visibility','hidden');

            //Tilt functionality for images
            $(".ratio-box").tilt({
              maxTilt: 2,
              transition: true,
              glare: true,
              maxGlare: 0.3,
              speed: 400,
              scale: 1.05
            });

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
              $(".shadow-image").css('transform','translateZ(-100px)');
            }

            // The new Container is ready and attached to the DOM.
        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            sr.sync();

        },
        onLeave: function() {

          // $('#container').mixItUp('destroy');
            // A new Transition toward a new page has just started.
        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });

    var Project = Barba.BaseView.extend({
        namespace: 'project',
        onEnter: function() {
          $('.fade-me').css('visibility','hidden');



            // The new Container is ready and attached to the DOM.
        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            sr.sync();
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene, {
              relativeInput: true
            });

        },
        onLeave: function() {

          // $('#container').mixItUp('destroy');
            // A new Transition toward a new page has just started.
        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });

    var About = Barba.BaseView.extend({
        namespace: 'about',
        onEnter: function() {
          $('.fade-me').css('visibility','hidden');


            // The new Container is ready and attached to the DOM.
        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            sr.sync();
        },
        onLeave: function() {

          // $('#container').mixItUp('destroy');
            // A new Transition toward a new page has just started.
        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });

    var About = Barba.BaseView.extend({
        namespace: 'post',
        onEnter: function() {
          $('.fade-me').css('visibility','hidden');


            // The new Container is ready and attached to the DOM.
        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            sr.sync();
            var blogImages;

            blogImages = document.getElementsByTagName('img');

            for(var i = 0; i < blogImages.length; i++) {
                blogImages[i].onclick = function(){
                  this.classList.toggle('magnify')
                };
            };
        },
        onLeave: function() {

          // $('#container').mixItUp('destroy');
            // A new Transition toward a new page has just started.
        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });

    // Don't forget to init the view!
    Home.init();
    Projects.init();
    Project.init();
    About.init();

    Barba.Pjax.start();

    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */

            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },

        fadeOut: function() {
            /**
             * this.oldContainer is the HTMLElement of the old Container
             */

            return $(this.oldContainer).animate({
                opacity: 0
            }).promise();
        },

        fadeIn: function() {
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */
            window.scrollTo(0, 0);
            var _this = this;
            var $el = $(this.newContainer);


            $(this.oldContainer).hide();

            $el.css({
                visibility: 'visible',
                opacity: 0
            });

            $el.animate({
                opacity: 1
            }, 400, function() {
                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */

                _this.done();
            });
        }
    });

    /**
     * Next step, you have to tell Barba to use the new Transition
     */

    Barba.Pjax.getTransition = function() {
        /**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         */

        return FadeTransition;
    };

    $('.navigation').on('click', '.nav-trigger', function(event) {
        // open primary navigation on mobile
        event.preventDefault();
        $('#menu').toggleClass('open');
        console.log("Menu Clicked");
    });

    $('.navigation a').on('click', function(event) {
        // open primary navigation on mobile
        event.preventDefault();
        $('#menu').removeClass('open');
    });

    //Hide nav on scroll down show on scroll up
    (function navigationScroll() {
      var prev = 0;
      var $window = $(window);
      var nav = $('.navigation');
      if($(window).scrollTop() <= 80) {
         nav.removeClass('is-hidden');
      }

      window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('is-hidden', scrollTop > prev);
        prev = scrollTop;
        $('#menu').removeClass('open');
        if($(window).scrollTop() <= 80) {
           nav.removeClass('is-hidden');
        }
      });

    })();

});


/**
 * Copyright 2015 Google Inc. All rights reserved.
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

/* eslint-env browser */
'use strict';

if ('serviceWorker' in navigator) {
  // Delay registration until after the page has loaded, to ensure that our
  // precaching requests don't degrade the first visit experience.
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    // Your service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
    // See https://github.com/slightlyoff/ServiceWorker/issues/468
    navigator.serviceWorker.register('sw.js').then(function(reg) {
      // updatefound is fired if service-worker.js changes.
      reg.onupdatefound = function() {
        // The updatefound event implies that reg.installing is set; see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        var installingWorker = reg.installing;

        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.
                // It's the perfect time to display a "New content is available; please refresh."
                // message in the page's interface.
                console.log('New or updated content is available.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a "Content is cached for offline use." message.
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });
}
