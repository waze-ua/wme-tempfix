// ==UserScript==
// @name         WME TempFix
// @version      2018.08.01.001
// @description  Temporarly fix WME broken API
// @author       turbopirate
// @include      /^https:\/\/(www|beta)\.waze\.com(\/\w{2,3}|\/\w{2,3}-\w{2,3}|\/\w{2,3}-\w{2,3}-\w{2,3})?\/editor\b/
// @grant        none
// @namespace https://greasyfork.org/users/166361
// ==/UserScript==

(function() {
  function wait() {
    if (!W || !W.map || !W.model || !W.model.nodes) {
        setTimeout(wait, 500);
        console.log('WME-TempFix: Waiting Waze...');
        return;
    }
    console.log("WME-TempFix: Ready...");
    init();
  };

  function init() {
     // On 1.08.2018 WME replaced get() with getObjectById() and this throws
     // huge amount of warnings from scripts making editor unusable. Fix just disables warnings.
     Object.getPrototypeOf(W.model.nodes).get = function(e) {return this.getObjectById(e)}
   }

   wait();
})();
