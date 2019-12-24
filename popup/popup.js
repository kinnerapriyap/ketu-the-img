let replaceImg = document.getElementById("replaceImg");

chrome.storage.sync.get("width", function(data) {
  replaceImg.style.backgroundColor = data.color;
  replaceImg.setAttribute("value", data.color);
});
replaceImg.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "contentScript.js"
    });
  });
};
