const textAreas = document.querySelectorAll("textArea");
let imageWidth = 300;
chrome.storage.sync.get(['width'], function (result) {
  imageWidth = result.width
  console.log("Get width input", result.width);
  textAreas.forEach(function (textArea) {
    const defaultPatt = /!\[(.*?)]\((.*?)\)/gm;
    const newPatt = '<img alt="" src="$2" width=' + imageWidth + ' />';
    textArea.value = textArea.value.replace(defaultPatt, newPatt);
  });
});
