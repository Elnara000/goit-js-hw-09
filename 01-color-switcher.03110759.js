!function(){var t=null,n={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};n.btnStart.addEventListener("click",(function(){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor="".concat(t)}),1e3),n.btnStart.setAttribute("disabled",!0)})),n.btnStop.addEventListener("click",(function(){clearInterval(t),n.btnStart.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.03110759.js.map
