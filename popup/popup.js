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

let replaceImg = document.getElementById("replace-img");
var imgWidth = document.getElementById("img-width");
chrome.storage.sync.get(['width'], function(result) {
  imgWidth.value = result.width
  console.log("Get width", result.width);
});
replaceImg.onclick = function(element) {
  let newImageWidthValue = imgWidth.value;
  chrome.storage.sync.set({ width: newImageWidthValue }, function() {
    console.log("Set width", newImageWidthValue);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "imageContentScript.js"
    });
  });
};
function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
};
document.addEventListener('DOMContentLoaded', function () {
  replaceImg.addEventListener('click', trackButtonClick);
});