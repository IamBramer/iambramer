

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

if ('serviceWorker' in navigator){
  console.log('Building you a personal IamBramer service worker.');
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  })
  .then(function (registration) {
  })
  .catch(function(e) {
    console.error('Error: ' + e);
  });
} else {
  console.log('Your browser does not allow awesome service workers to be made.');
}

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
