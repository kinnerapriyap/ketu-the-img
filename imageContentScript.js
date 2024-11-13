const textAreas = document.querySelectorAll("textArea");
chrome.storage.sync.get(['width', 'alt'], function (result) {
  textAreas.forEach(function (textArea) {
    const defaultPatt = /!\[(.*?)]\((.*?)\)/gm;
    const newPatt = '<img alt="' + result.alt + '" src="$2" width=' + result.width + ' />';
    textArea.value = textArea.value.replace(defaultPatt, newPatt);
  });
});
