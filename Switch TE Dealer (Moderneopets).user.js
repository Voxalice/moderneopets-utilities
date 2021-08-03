// ==UserScript==
// @name         Switch TE Dealer (Moderneopets)
// @namespace    https://voxalice.github.io/
// @version      1.0
// @description  Switch the Tyranu Evavu dealer, for Moderneopets.com!
// @author       Voxalice
// @match        *www.moderneopets.com/games/tyranuevavu
// @icon         https://www.moderneopets.com/favicon.ico
// @grant        none
// ==/UserScript==
var b=document.querySelector(".p-2"),d=["Uggsul","Oogaroo","Jarbjarb"],n=0,i=document.querySelector(".container > img:nth-child(1)");window.k=function(){++n>2&&(n=0),document.querySelector("form.text-center > input:nth-child(4)").value=d[n].toLowerCase(),i.src="https://www.moderneopets.com/images/games/tyranuevavu/"+d[n].toLowerCase()+".gif",i.alt=d[n],document.querySelector("p.text-center > b:nth-child(1)").innerText=d[n]},"Play Now!"==b.value&&$("<br><br><a href='javascript:k()' class='swch'>Switch Dealer</a>").insertAfter(".p-2");