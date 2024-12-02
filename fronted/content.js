// Detect email body content on Gmail or Outlook
function getEmailContent() {
  let content = "";

  // Gmail-specific scraping
  if (window.location.href.includes("mail.google.com")) {
    const emailBody = document.querySelector(".a3s"); // Gmail's email body container
    if (emailBody) content = emailBody.innerText;
  }

  // Outlook-specific scraping
  if (window.location.href.includes("outlook.live.com")) {
    const emailBody = document.querySelector(".ii.gt"); // Outlook's email body container
    if (emailBody) content = emailBody.innerText;
  }

  return content || "Unable to fetch email content. Please open an email.";
}

// Send the content back to the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getEmailContent") {
    const emailContent = getEmailContent();
    sendResponse({ content: emailContent });
  }
});
