$(function(){window.sr=ScrollReveal(),sr.reveal(".fade-me",{scale:1,distance:"200px",duration:1e3,easing:"ease-in-out",delay:0,viewFactor:.01},100);var n=Barba.BaseView.extend({namespace:"home",onEnter:function(){$(".fade-me").css("visibility","hidden")},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}}),e=Barba.BaseView.extend({namespace:"projects",onEnter:function(){$(".fade-me").css("visibility","hidden"),$(".ratio-box").tilt({maxTilt:2,transition:!0,glare:!0,maxGlare:.3,speed:400,scale:1.05})},onEnterCompleted:function(){sr.sync()},onLeave:function(){},onLeaveCompleted:function(){}}),i=Barba.BaseView.extend({namespace:"project",onEnter:function(){$(".fade-me").css("visibility","hidden")},onEnterCompleted:function(){sr.sync();var n=document.getElementById("scene");new Parallax(n,{relativeInput:!0})},onLeave:function(){},onLeaveCompleted:function(){}}),t=Barba.BaseView.extend({namespace:"about",onEnter:function(){$(".fade-me").css("visibility","hidden")},onEnterCompleted:function(){sr.sync()},onLeave:function(){},onLeaveCompleted:function(){}});n.init(),e.init(),i.init(),t.init(),Barba.Pjax.start();var a=Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return $(this.oldContainer).animate({opacity:0}).promise()},fadeIn:function(){window.scrollTo(0,0);var n=this,e=$(this.newContainer);$(this.oldContainer).hide(),e.css({visibility:"visible",opacity:0}),e.animate({opacity:1},400,function(){n.done()})}});Barba.Pjax.getTransition=function(){return a},$(".navigation").on("click",".nav-trigger",function(n){n.preventDefault(),$("#menu").toggleClass("open"),console.log("Menu Clicked")}),$(".navigation a").on("click",function(n){n.preventDefault(),$("#menu").removeClass("open")}),function(){var n=0,e=$(window),i=$(".navigation");e.on("scroll",function(){var t=e.scrollTop();i.toggleClass("is-hidden",t>n),n=t})}()});