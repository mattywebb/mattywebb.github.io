$(document).ready(function(){Modernizr.svg||$("img[src$=svg]").each(function(e,t){imagePath=$(t).attr("src"),$(t).attr("src",imagePath.slice(0,-3)+"png")}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),alert(yesss)}),document.body.clientWidth>768&&($(function(){$("a[rel*=leanModal]").leanModal({closeButton:".modal_close"})}),$(window).scroll(function(){var e;e=$(this).scrollTop(),$(document).scrollTop()<=1680?($("#header-cover").css({transform:"translate(0px,"+-(e/2)+"px)",opacity:"1"}),$(".intro").css({opacity:1-e/600}),$("#down").css({opacity:1-e/600,transform:"translate(0px,"+e/3+"px)"})):($("#header-cover").css({opacity:"0",transform:"translate(0px, 0px)"}),$(".intro").css({transform:"translate(0px, 0px)"}))}));var e=new Instafeed({get:"user",userId:19458322,accessToken:"19458322.467ede5.d05cb68773f44bf3962ef2d94674f4d2",limit:4,resolution:"standard_resolution",template:'<li><img src="{{image}}" /></li>'});e.run(),$.jribbble.getShotsByPlayerId("mattywebb",function(e){var t=[];$.each(e.shots,function(e,a){t.push('<li><a href="'+a.url+'" target="_blank">'),t.push('<img src="'+a.image_url+'" '),t.push('alt="'+a.title+'"></a></li>')}),$("#shotsByPlayerId").html(t.join(""))},{page:1,per_page:4});var t=function(e,t){this.bkgdColor=e,this.imgName=t},a=new t("#da453d","matt-red.jpg"),o=new t("#f05622","matt-orange.jpg"),n=new t("#f3b32a","matt-yellow.jpg"),r=new t("#1e9c5b","matt-green.jpg"),l=new t("#49b4ce","matt-blue.jpg"),s=[a,o,n,r,l],i="assets/img/",c=Math.floor(Math.random()*s.length),h=s[c],m=h.imgName,d=h.bkgdColor,g="url("+i+m+")",p=document.getElementById("header-cover");p.style.backgroundImage=g,p.style.backgroundColor=d;var u=["hello","ciao","welcome","howdy","greetings","salut","hallo","hola","Gday","Hey"],f=Math.floor(Math.random()*u.length);document.getElementById("title").innerHTML=u[f]});