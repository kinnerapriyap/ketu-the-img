let replaceImg = document.getElementById("replace-img");
const imgWidth = document.getElementById("img-width");
const imgAlt = document.getElementById("img-alt");
chrome.storage.sync.get(['width', 'alt'], function (result) {
  imgWidth.value = result.width
  imgAlt.value = result.alt
});
replaceImg.onclick = function () {
  chrome.storage.sync.set({width: imgWidth.value, alt: imgAlt.value});
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['imageContentScript.js']
    });
  });
};