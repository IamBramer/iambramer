$.Velocity.RegisterEffect("transition.fadeIn",{defaultDuration:700,calls:[[{opacity:1}]]}),$.Velocity.RegisterEffect("transition.fadeOut",{defaultDuration:700,calls:[[{opacity:0}]]}),$(function(){var t=!1,n=function(){console.log("Initializing scripts")},e=function(e){n(),t=!0},i=function(t){$("#content").velocity("transition.fadeOut",{complete:function(){$("html").velocity("scroll",{duration:0,easing:"ease",mobileHA:!1}),$("#content").load(t+" #content",function(){$("#content").velocity("transition.fadeIn",{visibility:"visible",complete:function(){e(),console.log("Ajax Loaded")}})})}})};n(),$(window).on("popstate",function(n){t&&i(location.href),console.log("Popstate happened")}),$(".email").on("click",function(t){t.preventDefault();window.location="mailto:tyler@iambramer.com"}),$(document).on("click","a",function(){var t=$(this).attr("href"),n=$(this).text();if(t.indexOf(document.domain)>-1||-1===t.indexOf(":"))return history.pushState({url:t,title:n},n,t),document.title="/"==t?"IamBramer":n+" - IamBramer",i(t),!1}),$(".navigation").on("click",".nav-trigger",function(t){t.preventDefault(),$("#menu").toggleClass("open"),console.log("Menu Clicked")}),$(".navigation a").on("click",function(t){t.preventDefault(),$("#menu").removeClass("open")}),$("img").each(function(){var t=this.src.slice(0,-4),n=this.src.substr(this.src.lastIndexOf(".")+1);this.src=t+"-2400."+n,this.srcset=t+"-600."+n+" 600w, "+t+"-900."+n+" 900w, "+t+"-1200."+n+" 1200w, "+t+"-1800."+n+" 1800w, "+t+"-2400."+n+" 2400w"})});