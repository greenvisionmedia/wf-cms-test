//This is the inline script that seems to be added to every page
//Formatted with VScode
//It's exactly the same on each page

!function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js",
        ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);

//Deobfuscated with JSNice

'use strict';
!function (window, document) {
    /** @type {!Element} */
    var input = document.documentElement;
    /** @type {string} */
    var tag = " w-mod-";
    input.className += tag + "js";
    if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
        input.className += tag + "touch";
    }
}(window, document);

