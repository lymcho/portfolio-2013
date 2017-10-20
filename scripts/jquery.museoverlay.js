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
(function(b){b.fn.museOverlay=function(c){var a=b.extend({autoOpen:!0,offsetLeft:0,offsetTop:0,$overlaySlice:b(),$overlayWedge:b(),duration:300,overlayExtraWidth:0,overlayExtraHeight:0},c);return this.each(function(){var d=b(this).data("museOverlay");if(d&&d[c]!==void 0)return d[c].apply(this,Array.prototype.slice.call(arguments,1));var g=b("<div></div>").appendTo("body").css({position:"absolute",top:0,left:0,zIndex:100001}).hide(),f=b("<div></div>").append(a.$overlaySlice).appendTo(g).css({position:"absolute",
top:0,left:0}),h=b(this).css({position:"absolute",left:0,top:0}).appendTo(g),j=b(window),i,k,m=null,l={isOpen:!1,open:function(){if(!l.isOpen)i=j.width(),k=j.height(),l.positionContent(i,k),g.show(),f.bind("click",l.close),f.css({opacity:0}).stop(!0),h.css({opacity:0}).stop(!0),f.bind("click",l.close).animate({opacity:0.99},{queue:!1,duration:a.duration,complete:function(){f.css({opacity:""});h.animate({opacity:1},{queue:!1,duration:a.duration,complete:function(){h.css({opacity:""})}})}}),b(document).bind("keydown",
l.onKeyDown),l.doLayout(),l.isOpen=!0,j.bind("resize",l.onWindowResize)},close:function(){b(".Container",h).each(function(){Muse.Utils.detachIframesAndObjectsToPauseMedia(b(this))});f.unbind("click",l.close);j.unbind("resize",l.onWindowResize);b(document).unbind("keydown",l.onKeyDown);if(a.onClose)a.onClose();f.css({opacity:0.99}).stop(!0);h.css({opacity:0.99}).stop(!0);h.animate({opacity:0},{queue:!1,duration:a.duration,complete:function(){f.animate({opacity:0},{queue:!1,duration:a.duration,complete:function(){g.hide();
h.css({opacity:""});f.css({opacity:""})}})}});l.isOpen=!1},onKeyDown:function(a){a.keyCode===27&&l.close()},onWindowResize:function(){var a=j.width(),b=j.height();(i!=a||k!=b)&&m==null&&(m=setTimeout(function(){i=j.width();k=j.height();l.positionContent(i,k);l.doLayout();m=null},10))},doLayout:function(){g.css({width:0,height:0});a.$overlayWedge.css({width:0,height:0});var c=b(document),d=c.width(),c=c.height(),f=document.documentElement||document.body;f.clientWidth!=f.offsetWidth&&(d=f.scrollWidth-
1);f.clientHeight!=f.offsetHeight&&(c=f.scrollHeight-1);g.css({width:d,height:c});a.$overlayWedge.css({width:d-a.overlayExtraWidth,height:c-a.overlayExtraHeight})},positionContent:function(b,c){var d=j.scrollLeft()+Math.max(0,b/2+a.offsetLeft),g=j.scrollTop()+Math.max(0,c/2+a.offsetTop);h.css({top:g,left:d})}};h.data("museOverlay",l);a.autoShow&&l.open()})}})(jQuery);
