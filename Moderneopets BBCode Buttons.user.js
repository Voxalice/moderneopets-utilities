// ==UserScript==
// @name         Moderneopets BBCode Buttons
// @namespace    https://voxalice.github.io/
// @version      1.0
// @description  Properly implement the BBCode buttons when Neomailing. And also take over the world.
// @author       Voxalice
// @include      /(.+|)\.moderneopets\.(com|test)\/social\/neomail\/(repl|creat).+/
// @icon         https://www.moderneopets.com/favicon.ico
// @grant        none
// ==/UserScript==
window.a=["[b][/b]","[i][/i]","[u][/u]","[s][/s]","[left][/left]","[center][/center]","[right][/right]","","[img][/img]","","[list]\n[*] List item\n[/list]"],window.e=function(e){10==e|8==e&&console.log("E:nm"),e>12&&console.error("E:ne"),document.querySelector("textarea.w-full").value+=a[e-1]};for(var j=0;j<12;j++)$("button.px-2:nth-child("+j+")").attr("onclick","e("+j+")");console.log("Loaded!");