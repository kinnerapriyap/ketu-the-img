let replaceImg = document.getElementById("replace-img");
var imgWidth = document.getElementById("img-width");
chrome.storage.sync.get(['width'], function(result) {
  imgWidth.value = result.width
  console.log("Get width input", "width", result.width);
});
replaceImg.onclick = function(element) {
  let newImageWidthValue = imgWidth.value;
  chrome.storage.sync.set({ width: newImageWidthValue }, function() {
    console.log("Set width input", "width", newImageWidthValue);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "contentScript.js"
    });
  });
};
