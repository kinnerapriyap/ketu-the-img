chrome.runtime.onInstalled.addListener(() => {
  let value = 300;
  chrome.storage.sync.set({width: value}, () => {
    console.log("Default width", value);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: "github.com"},
            css: ["textarea"]
          })
        ],
        actions: [new chrome.declarativeContent.ShowAction()]
      }
    ]);
  });
});