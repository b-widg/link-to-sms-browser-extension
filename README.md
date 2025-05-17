<p align="center">
  <img src="icon.png" alt="Extension Icon" width="128"/><br>
  <caption>I was vibe coded 😁</caption>
</p>

---

# Send Link via SMS Extension

This project is a browser extension with a Node.js backend that lets you send the current web page link via SMS using Twilio.

---

## 🚀 Features

* Browser extension captures the active tab's URL
* Sends it via SMS to a user-defined phone number
* Node.js backend using Express and Twilio
* Modern UI with Material 3 design style
* Adapts to user's light or dark mode preferences

---

## 🛠 Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/send-link-via-sms.git
cd send-link-via-sms
```

### 2. Install Node.js Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

### 4. Run the Backend Server

```bash
node server.js
```

---

## 🌐 Load the Browser Extension

1. Open your browser (e.g., Chrome or Edge).
2. Go to `chrome://extensions/` and enable **Developer Mode**.
3. Click **Load Unpacked** and select the `extension/` directory.
4. Click the extension icon and test by entering a phone number and clicking **Send**.

> ✅ The server must be running locally on `http://localhost:3000`.

---

## 🧪 Testing

* Open any website
* Click the extension icon
* Enter a phone number
* Press **Send**
* You should receive the link as an SMS (if Twilio is configured correctly)

---

## 📝 License

This project is licensed under the MIT License.
