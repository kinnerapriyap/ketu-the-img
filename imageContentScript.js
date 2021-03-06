var textAreas = document.querySelectorAll("textArea[name*='[body]']");
var imageWidth = 300
chrome.storage.sync.get(['width'], function(result) {
  imageWidth = result.width
  console.log("Get width input", result.width);
  textAreas.forEach(function(textArea) {
    var defaultPatt = /\!\[(.*?)\]\((.*?)\)/gm;
    var newPatt = '<img src="$2" width=' + imageWidth + ' />';
    textArea.value = textArea.value.replace(defaultPatt, newPatt);
  });
});
