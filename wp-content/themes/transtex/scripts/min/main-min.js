!function(e,n,$){"use strict";!function(e,n,t){var s=e.querySelectorAll(".inputfile");Array.prototype.forEach.call(s,function(e){var n=e.nextElementSibling,t=n.innerHTML;e.addEventListener("change",function(e){var s="";s=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop(),s?n.querySelector("span.label-upload").innerHTML=s:n.innerHTML=t}),e.addEventListener("focus",function(){e.classList.add("has-focus")}),e.addEventListener("blur",function(){e.classList.remove("has-focus")})})}(n,e,0),$(e).scroll(function(){$(this).scrollTop()>1?$(".navbar-menu").addClass("navbar-animated"):$(".navbar-menu").removeClass("navbar-animated")}),$(".operation-wrap .operation-circle").hover(function(e){$(this).next().show(),$(this).next().addClass("show")},function(e){$(this).next().hide(),$(this).next().removeClass("show")}),$(".navbar-toggle").click(function(){$(".navbar-menu-collapse").addClass("show")}),$(".mobile-close").click(function(){$(".navbar-menu-collapse").removeClass("show")}),$(".grid-footer .grid-title").each(function(){var e=$(this).html(),n=e.indexOf(" ");-1==n&&(n=e.length),$(this).html('<span class="red">'+e.substring(0,n)+"</span>"+e.substring(n,e.length))})}(window,document,jQuery);