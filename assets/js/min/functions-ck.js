$(document).ready(function(){Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),document.body.clientWidth>768&&$(window).scroll(function(){var o;o=$(this).scrollTop(),$(document).scrollTop()<=1680&&($("#header-cover").css({transform:"translate(0px,"+-(o/2)+"px)"}),$(".header-wrap").css({opacity:1-o/600}))})}),$(window).load(function(){var o=["hello","ciao","welcome","howdy","greetings","salut","hallo","hola","Gday","Hey"],t=Math.floor(Math.random()*o.length);document.getElementById("title").innerHTML=o[t]});