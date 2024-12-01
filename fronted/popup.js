document.getElementById("check-spam").addEventListener("click", async () => {
    const emailText = document.getElementById("email-text").value.trim();
    if (!emailText) {
        document.getElementById("result").textContent = "Please enter the email content!";
        return;
    }

    document.getElementById("result").textContent = "Checking... Please wait.";

    try {
        const response = await fetch('http://127.0.0.1:5000/check_spam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: emailText })
        });

        if (!response.ok) {
            throw new Error("Server error: Unable to check spam.");
        }

        const result = await response.json();
        const isSpam = result.spam ? "This email is SPAM!" : "This email is NOT SPAM.";
        document.getElementById("result").textContent = isSpam;
    } catch (error) {
        document.getElementById("result").textContent = `Error: ${error.message}`;
    }
});
