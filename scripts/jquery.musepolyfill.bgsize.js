/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(b){function c(a){var b=a.css("background-image");a.css("background-image","");var c=a.css("background-image");b!=c&&a.css("background-image",b);return c.replace(/^\s*url\(\"?/,"").replace(/['"]?\)$/,"")}if(!Muse.Browser.Features.checkCSSFeature("background-size")){var a=function(a){var d=b(a),f=c(d),i=document.createElement("img"),k=document.createElement("div"),m=this,l=!1,o=!1,n=!0;b(k).css({overflow:"hidden",position:"absolute",top:"0px",left:"0px",width:a.clientWidth+"px",height:a.clientHeight+
"px",marginBottom:"-"+a.clientHeight+"px",marginRight:"-"+a.clientWidth+"px",zIndex:"-1"}).addClass("museBgSizePolyfill");i.src=f;i.alt="";i.style.position="absolute";k.appendChild(i);a.children.length>0?a.insertBefore(k,a.children[0]):a.appendChild(k);if(a===document.body)d=b("html"),a=d.get(0),f=c(d),i.src=f,d.css("background-attachment")=="fixed"?(k.style.position="fixed",n=!1):k.style.position="absolute";else if(d.is("#page"))d.css("marginLeft").toLowerCase()=="auto"&&(o=!0),k.style.top=d.offset().top+
parseInt(d.css("borderTopWidth"))+"px",k.style.bottom=parseInt(d.parent().css("paddingBottom"))+parseInt(d.css("borderBottomWidth"))+"px",k.style.left=d.offset().left+parseInt(d.css("borderLeftWidth"))+"px",k.style.right=d.offset().left+parseInt(d.css("borderRightWidth"))+"px",k.style.zIndex=0;else if(d.css("position")=="static")a.style.position="relative";this.reloadImage=function(){var b=c(d),f=d.css("background-color");if(b!=i.src)i.src=b;a.style.backgroundImage="none";a.style.backgroundColor=
"transparent";k.style.backgroundColor=f;b=(d.css("background-position-x")+" "+d.css("background-position-y")).replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/);b.length==1&&b[0].indexOf("center")>=0&&b.push("center");for(var f=0,j=b.length;f<j;f++)switch(b[f]){case "center":case "50%":f==0?(i.style.right="",i.style.left="50%",i.style.marginLeft="-"+Math.ceil(i.offsetWidth/2)+"px"):(i.style.bottom="",i.style.top="50%",i.style.marginTop="-"+Math.ceil(i.offsetHeight/2)+"px");break;case "left":i.style.right=
"";i.style.left="0px";i.style.marginLeft="0px";break;case "right":i.style.left="";i.style.right="0px";i.style.marginLeft="0px";break;case "top":i.style.bottom="";i.style.top="0px";i.style.marginTop="0px";break;case "bottom":i.style.top="";i.style.bottom="0px";i.style.marginTop="0px";break;default:f==0?(i.style.left=b[f],i.style.marginLeft="-"+Math.ceil(i.offsetWidth/2)+"px"):(i.style.top=b[f],i.style.marginTop="-"+Math.ceil(i.offsetHeight/2)+"px")}};this.resizeImage=function(b){var c=a.getBoundingClientRect(),
f=a.scrollWidth-(Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder?c.right-c.left-d.innerWidth():0),c=a.scrollHeight-(Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder?c.bottom-c.top-d.innerHeight():0),f=!n?a.clientWidth:Math.max(f,a.clientWidth),c=!n?a.clientHeight:Math.max(c,a.clientHeight),j=f/(i.clientWidth||1),l=c/(i.clientHeight||1);k.style.height=c+"px";k.style.marginBottom="-"+c+"px";k.style.width=f+"px";k.style.marginRight="-"+f+"px";j<l==b?(i.style.height=c+1+"px",i.style.width="auto"):
(i.style.width=f+1+"px",i.style.height="auto")};this.update=function(){if(l){a.style.backgroundImage="";d.css("background-color","");var b=d.css("background-image").toLowerCase(),c=(a.currentStyle||window.getComputedStyle(a,null))["background-size"];c&&c.toLowerCase();if(b!="none"&&(c=="cover"||c=="contain")){if(m.reloadImage(),k.style.display="block",k.style.width="0px",k.style.height="0px",m.resizeImage(c=="cover"),o)k.style.left=d.offset().left+parseInt(d.css("borderLeftWidth"))+"px",k.style.right=
d.offset().left+parseInt(d.css("borderRightWidth"))+"px"}else k.style.display="none"}};if(i.complete||f=="none")l=!0;else b(i).one("load",function(){l=!0;m.update()});this.update()},d=[];b(".museBGSize").each(function(){var c=new a(this);this!==document.body?d.push(c):(b(window).resize(function(){setTimeout(function(){c.update()},10)}),b(window).load(function(){setTimeout(function(){c.update()},10)}))});var f=d.length;f>0&&setInterval(function(){for(var a=0;a<f;a++)d[a].update()},Math.max(120,16*
f))}})(jQuery);
