document.getElementById("sendButton").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const res = await fetch("http://localhost:3000/send-sms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ to: phoneNumber, message: url })
  });

  const status = document.getElementById("status");
  if (res.ok) {
    status.textContent = "SMS sent!";
  } else {
    status.textContent = "Failed to send SMS.";
  }
});
