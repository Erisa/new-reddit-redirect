const standardReddit = "https://www.reddit.com";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl:
      standardReddit + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
    };
  },
  {
    urls: [
      "*://np.reddit.com/*",
      "*://old.reddit.com/*",
      "*://new.reddit.com/*"
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  ["blocking"]
);