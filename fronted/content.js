// Function to extract email text from Gmail
function getEmailText() {
  const emailBody = document.querySelector(".a3s.aiL"); // Gmail's class for email content
  return emailBody ? emailBody.innerText : null;
}

// Detect spam when an email page is loaded
const emailText = getEmailText();
if (emailText) {
  fetch('http://127.0.0.1:5000/check_spam', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: emailText })
  })
  .then(response => response.json())
  .then(result => {
      const isSpam = result.spam ? "This email is spam!" : "This email is not spam.";
      alert(isSpam);  // Optionally use alert to notify user
  })
  .catch(error => {
      console.error('Error checking spam:', error);
      alert('Error checking spam. Please try again later.');
  });
}
