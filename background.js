chrome.runtime.onInstalled.addListener(function() {
  let value = 300;
  chrome.storage.sync.set({ width: value }, function() {
    console.log("Default", "width", value);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "github.com" },
            css: ["textarea"]
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
