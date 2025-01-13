chrome.storage.sync.get(['width', 'alt'], function (result) {
  const textAreas = document.querySelectorAll("textArea, textarea");
  textAreas.forEach(function (textArea) {
    const defaultPatt = /!\[(.*?)]\((.*?)\)/gm;
    const newPatt = '<img alt="' + result.alt + '" src="$2" width=' + result.width + ' />';
    textArea.value = textArea.value.replace(defaultPatt, newPatt);
  });
});
