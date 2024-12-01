chrome.runtime.onInstalled.addListener(() => {
  console.log("Spam Detector Extension Installed.");
});

// Optionally, set up listener for messages if needed in the future
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkSpam") {
      // Handle message and interact with the popup or content script if needed
  }
});
