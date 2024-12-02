document.getElementById("checkSpam").addEventListener("click", () => {
    // Clear previous results
    document.getElementById("result").innerText = "Loading...";
  
    // Request email content from the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(
        activeTab.id,
        { action: "getEmailContent" },
        (response) => {
          if (response && response.content) {
            const emailText = response.content;
  
            // Call the spam detection API
            fetch("http://127.0.0.1:5000/check_spam", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text: emailText })
            })
              .then((res) => res.json())
              .then((data) => {
                const result = data.spam
                  ? "This email is SPAM."
                  : "This email is NOT SPAM.";
                document.getElementById("result").innerText = result;
              })
              .catch((error) => {
                console.error("Error:", error);
                document.getElementById("result").innerText = "Error checking spam.";
              });
          } else {
            document.getElementById("result").innerText =
              "Unable to fetch email content.";
          }
        }
      );
    });
  });
  
