let replaceImg = document.getElementById("replace-img");
const imgWidth = document.getElementById("img-width");
const imgAlt = document.getElementById("img-alt");
chrome.storage.sync.get(['width'], function (result) {
  imgWidth.value = result.width
  console.log("Get width", result.width);
});
chrome.storage.local.get(['alt'], function (result) {
  imgAlt.value = result.alt
  console.log("Get alt", result.alt);
});
replaceImg.onclick = function () {
  let newImageWidthValue = imgWidth.value;
  chrome.storage.sync.set({width: newImageWidthValue}, function () {
    console.log("Set width", newImageWidthValue);
  });
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['imageContentScript.js']
    });
  });
};