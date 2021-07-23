// ==UserScript==
// @name         BBCode Buttons Implementation (Original)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Properly implement the BBCode buttons when Neomailing. And also take over the world.
// @author       Voxalice
// @include      /(.+|)\.moderneopets\.(com|test)\/social\/neomail\/(repl|creat).+/
// @icon         https://www.moderneopets.com/favicon.ico
// @grant        none
// ==/UserScript==

window.a = ["[b][/b]","[i][/i]","[u][/u]","[s][/s]","[left][/left]","[center][/center]","[right][/right]","","[img][/img]","","[list]\n[*] List item\n[/list]"]

window.e = function(b){
        if(b==10|b==8){
            console.log("E:nm")
            // not in NeoMails
        }
        if(b>12){
            console.error('E:ne');
            // Non-Existent
        }
    document.querySelector("textarea.w-full").value+=a[b-1]
}

for(var j=0;j<12;j++){$('button.px-2:nth-child('+j+')').attr('onclick','e('+j+')')}

console.log('Loaded!');