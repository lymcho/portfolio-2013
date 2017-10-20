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
(function(b){b.fn.museMenu=function(){return this.each(function(){var c=b(this),a="absolute",d,g,f,h,j;if(c.css("position")=="fixed"){var a="fixed",i=Muse.Utils.getStyleSheetRuleById(Muse.Utils.getPageStyleSheet(),this.id);d=Muse.Utils.getRuleProperty(i,"top");g=Muse.Utils.getRuleProperty(i,"left");f=Muse.Utils.getRuleProperty(i,"right");h=Muse.Utils.getRuleProperty(i,"bottom");j=parseInt(c.css("margin-left"))}else for(i=c.parent();i.length>0&&i.attr("id")!="page";){if(i.css("position")=="fixed"){var a=
"fixed",k=i.offset(),m=c.offset(),l=Muse.Utils.getStyleSheetRuleById(Muse.Utils.getPageStyleSheet(),i.attr("id")),n=Muse.Utils.getRuleProperty(l,"top"),o=Muse.Utils.getRuleProperty(l,"left"),q=Muse.Utils.getRuleProperty(l,"right"),l=Muse.Utils.getRuleProperty(l,"bottom");d=n&&n!="auto"?parseInt(n)+(m.top-k.top):n;g=o&&o!="auto"&&o.indexOf("%")==-1?parseInt(o)+(m.left-k.left):o;f=q&&q!="auto"&&q.indexOf("%")==-1?parseInt(q)+(k.left+i.width())-(m.left+c.width()):q;h=l&&l!="auto"?parseInt(l)+(k.top+
i.height())-(m.top+c.height()):l;j=parseInt(i.css("margin-left"))+(o&&o.indexOf("%")!=-1?m.left-k.left:0);break}i=i.parent()}var p=b(),u=!1,B=c.find(".MenuItemContainer"),i=c.find(".MenuItem"),k=c.find(".SubMenu").add(i),s;k.on("mouseover",function(){u=!0});k.on("mouseleave",function(){u=!1;setTimeout(function(){u===!1&&(B.each(function(){b(this).data("hideSubmenu")()}),p=b())},300)});B.on("mouseleave",function(a){var c=b(a.target),d=c.closest(".SubMenu");s&&clearTimeout(s);d.length>0&&(s=setTimeout(function(){d.find(".MenuItemContainer").each(function(){b(this).data("hideSubmenu")()});
p=c.closest(".MenuItemContainer").data("$parentMenuItemContainer")},300))});B.on("mouseenter",function(){clearTimeout(s)});i.each(function(){var i=b(this),k=i.siblings(".SubMenu"),l=i.closest(".MenuItemContainer"),m=l.parentsUntil(".MenuBar").filter(".MenuItemContainer").length===0,n;if(m&&k.length>0){var o=b("<div style='position:"+a+"' class='MenuBar popup_element'></div>").hide().appendTo("body");k.show();n=k.position().top;k.hide()}l.data("$parentMenuItemContainer",l.parent().closest(".MenuItemContainer")).data("showSubmenuOnly",
function(){if(m&&k.length>0)if(a!="fixed"){var b=l.offset();o.appendTo("body").css({left:b.left,top:b.top}).append(k).show()}else{var b=l.position(),i=0,p=0;f&&f!="auto"&&(i=c.outerWidth()-b.left);h&&h!="auto"&&(p=n);o.appendTo("body").css({left:g,top:d,right:f,bottom:h,marginLeft:j+b.left,marginRight:i,marginTop:b.top,marginBottom:p}).append(k).show()}k.show();k.find(".SubMenu").hide()}).data("hideSubmenu",function(){k.hide()}).data("isDescendentOf",function(a){for(var b=l.data("$parentMenuItemContainer");b.length>
0;){if(a.index(b)>=0)return!0;b=b.data("$parentMenuItemContainer")}return!1});var q=function(){var a=p;a.length==0?l.data("showSubmenuOnly")():l.data("$parentMenuItemContainer").index(a)>=0?l.data("showSubmenuOnly")():l.siblings().index(a)>=0?(a.data("hideSubmenu")(),l.data("showSubmenuOnly")()):a.data("isDescendentOf")(l)?l.data("showSubmenuOnly")():a.data("isDescendentOf")(l.siblings(".MenuItemContainer"))?(l.siblings(".MenuItemContainer").each(function(){b(this).data("hideSubmenu")()}),l.data("showSubmenuOnly")()):
a.get(0)==l.get(0)&&l.data("showSubmenuOnly")();p=l},s=null;i.on("mouseenter",function(){i.data("mouseEntered",!0);s=setTimeout(function(){q()},200);i.one("mouseleave",function(){clearTimeout(s);i.data("mouseEntered",!1)})});k.length&&(i.attr("aria-haspopup",!0),Muse.Browser.Features.Touch&&(i.click(function(){return k.is(":visible")}),b(document.documentElement).on(Muse.Browser.Features.Touch.End,Muse.Browser.Features.Touch.Listener(function(a){!k.is(":visible")&&b(a.target).closest(l).length>0?
(a.stopPropagation(),Muse.Utils.redirectCancelled=!0,setTimeout(function(){Muse.Utils.redirectCancelled=!1},16),i.data("mouseEntered")&&setTimeout(function(){l.data("showSubmenuOnly")()},200)):k.is(":visible")&&b(a.target).closest(k).length==0&&b(a.target).closest(l).length==0&&l.data("hideSubmenu")()}))))});i.filter(".MuseMenuActive").each(function(){for(var a=b(this).closest(".MenuItemContainer").data("$parentMenuItemContainer");a&&a.length>0;)a.children(".MenuItem").addClass("MuseMenuActive"),
a=a.data("$parentMenuItemContainer")})})}})(jQuery);
