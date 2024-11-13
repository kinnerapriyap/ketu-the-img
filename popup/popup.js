let replaceImg = document.getElementById("replace-img");
const imgWidth = document.getElementById("img-width");
chrome.storage.sync.get(['width'], function(result) {
  imgWidth.value = result.width
  console.log("Get width", result.width);
});
replaceImg.onclick = function() {
  let newImageWidthValue = imgWidth.value;
  chrome.storage.sync.set({ width: newImageWidthValue }, function() {
    console.log("Set width", newImageWidthValue);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['imageContentScript.js']
    });
  });
};