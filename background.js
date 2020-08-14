var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-90329527-2']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); 
  ga.type = 'text/javascript'; 
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

chrome.runtime.onInstalled.addListener(function() {
  let value = 300;
  chrome.storage.sync.set({ width: value }, function() {
    console.log("Default width", value);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "github.com" },
            css: ["textarea"]
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
