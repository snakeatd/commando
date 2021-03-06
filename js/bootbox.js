/**
 * bootbox.js v2.3.1
 *
 * The MIT License
 *
 * Copyright (C) 2011-2012 by Nick Payne <nick@kurai.co.uk>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE
 */
var bootbox=window.bootbox||function(){function j(b,a){null==a&&(a=k);return"string"==typeof h[a][b]?h[a][b]:a!=l?j(b,l):b}var k="en",l="en",o=!0,g={},f={},h={en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},ru:{OK:"OK",CANCEL:"\u041e\u0442\u043c\u0435\u043d\u0430",
CONFIRM:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"}};f.setLocale=function(b){for(var a in h)if(a==b){k=b;return}throw Error("Invalid locale: "+b);};f.addLocale=function(b,a){"undefined"==typeof h[b]&&(h[b]={});for(var c in a)h[b][c]=a[c]};f.setIcons=function(b){g=b;if("object"!==typeof g||null==g)g={}};f.alert=function(){var b="",a=j("OK"),c=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?c=arguments[1]:a=arguments[1];break;
case 3:b=arguments[0];a=arguments[1];c=arguments[2];break;default:throw Error("Incorrect number of arguments: expected 1-3");}return f.dialog(b,{label:a,icon:g.OK,callback:c},{onEscape:c})};f.confirm=function(){var b="",a=j("CANCEL"),c=j("CONFIRM"),e=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?e=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];"function"==typeof arguments[2]?e=arguments[2]:c=arguments[2];break;
case 4:b=arguments[0];a=arguments[1];c=arguments[2];e=arguments[3];break;default:throw Error("Incorrect number of arguments: expected 1-4");}return f.dialog(b,[{label:a,icon:g.CANCEL,callback:function(){"function"==typeof e&&e(!1)}},{label:c,icon:g.CONFIRM,callback:function(){"function"==typeof e&&e(!0)}}])};f.prompt=function(){var b="",a=j("CANCEL"),c=j("CONFIRM"),e=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?e=arguments[1]:a=arguments[1];
break;case 3:b=arguments[0];a=arguments[1];"function"==typeof arguments[2]?e=arguments[2]:c=arguments[2];break;case 4:b=arguments[0];a=arguments[1];c=arguments[2];e=arguments[3];break;default:throw Error("Incorrect number of arguments: expected 1-4");}var m=$("<form></form>");m.append("<input autocomplete=off type=text />");var h=f.dialog(m,[{label:a,icon:g.CANCEL,callback:function(){"function"==typeof e&&e(null)}},{label:c,icon:g.CONFIRM,callback:function(){"function"==typeof e&&e(m.find("input[type=text]").val())}}],
{header:b});h.on("shown",function(){m.find("input[type=text]").focus();m.on("submit",function(a){a.preventDefault();h.find(".btn-primary").click()})});return h};f.modal=function(){var b,a,c,e={onEscape:null,keyboard:!0,backdrop:!0};switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"object"==typeof arguments[1]?c=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];c=arguments[2];break;default:throw Error("Incorrect number of arguments: expected 1-3");}e.header=
a;c="object"==typeof c?$.extend(e,c):e;return f.dialog(b,[],c)};f.dialog=function(b,a,c){var e=null,f="",h=[],c=c||{};null==a?a=[]:"undefined"==typeof a.length&&(a=[a]);for(var d=a.length;d--;){var g=null,j=null,k="",l=null;if("undefined"==typeof a[d].label&&"undefined"==typeof a[d]["class"]&&"undefined"==typeof a[d].callback){var g=0,p=null,n;for(n in a[d])if(p=n,1<++g)break;1==g&&"function"==typeof a[d][n]&&(a[d].label=p,a[d].callback=a[d][n])}"function"==typeof a[d].callback&&(l=a[d].callback);
a[d]["class"]?j=a[d]["class"]:d==a.length-1&&2>=a.length&&(j="btn-primary");g=a[d].label?a[d].label:"Option "+(d+1);a[d].icon&&(k="<i class='"+a[d].icon+"'></i> ");f+="<a data-handler='"+d+"' class='btn "+j+"' href='#'>"+k+""+g+"</a>";h[d]=l}a=["<div class='bootbox modal'>"];if(c.header){d="";if("undefined"==typeof c.headerCloseButton||c.headerCloseButton)d="<a href='#' class='close'>&times;</a>";a.push("<div class='modal-header'>"+d+"<h3>"+c.header+"</h3></div>")}a.push("<div class='modal-body'></div>");
f&&a.push("<div class='modal-footer'>"+f+"</div>");a.push("</div>");var i=$(a.join("\n"));("undefined"===typeof c.animate?o:c.animate)&&i.addClass("fade");$(".modal-body",i).html(b);i.bind("hidden",function(){i.remove()});i.bind("hide",function(){if("escape"==e&&"function"==typeof c.onEscape)c.onEscape()});$(document).bind("keyup.modal",function(a){27==a.which&&(e="escape")});i.bind("shown",function(){$("a.btn-primary:last",i).focus()});i.on("click",".modal-footer a, a.close",function(a){var b=$(this).data("handler"),
b=h[b],c=null;"function"==typeof b&&(c=b());!1!==c&&(a.preventDefault(),e="button",i.modal("hide"))});null==c.keyboard&&(c.keyboard="function"==typeof c.onEscape);$("body").append(i);i.modal({backdrop:c.backdrop||!0,keyboard:c.keyboard});return i};f.hideAll=function(){$(".bootbox").modal("hide")};f.animate=function(b){o=b};return f}();