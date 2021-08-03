// ==UserScript==
// @name         Moderneopets TE Dealer Switch
// @namespace    https://voxalice.github.io/
// @version      1.0
// @description  Switch the Tyranu Evavu dealer, for Moderneopets.com!
// @author       Voxalice
// @match        *www.moderneopets.com/games/tyranuevavu
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    var pb = document.querySelector(".p-2");
    var d = ['Uggsul','Oogaroo','Jarbjarb'];
    var dn = 0;
    var i = document.querySelector(".container > img:nth-child(1)")

    window.k=function(){
        dn++;
        if(dn>2){dn=0};
        document.querySelector("form.text-center > input:nth-child(4)").value = d[dn].toLowerCase();
        i.src = "https://www.moderneopets.com/images/games/tyranuevavu/"+d[dn].toLowerCase()+".gif";
        i.alt = d[dn];
        document.querySelector("p.text-center > b:nth-child(1)").innerText=d[dn];
    }

    if (pb.value == "Play Now!") {
        $("<br><br><a href='javascript:k()' class='swch'>Switch Dealer</a><!-- Voxalice -->").insertAfter(".p-2");
    }
})();