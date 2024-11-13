chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({width: 300, alt: ""});
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