# Build Instructions for AI Agents

This project involves creating a browser extension and a Node.js server that sends SMS messages using Twilio. Follow these steps in detail:

---

## 📁 Project Structure

* `manifest.json`: Extension manifest file.
* `popup.html`: HTML for the extension popup.
* `popup.js`: JavaScript for the extension popup.
* `popup.css`: CSS for styling the extension popup.
* `server.js`: Main backend script (Node.js/Express).
* `icon.png`: Icon for the extension.
* `.env`: Configuration file for Twilio credentials.
* `.gitignore`: Specifies intentionally untracked files that Git should ignore.
* `README.md`: Project description and setup guide.
* `package.json`: Lists project dependencies and scripts.
* `package-lock.json`: Records exact versions of dependencies.

---

## 🔧 Setup Instructions

### 1. Prepare the Environment

* Use Node.js >= 16
* Install dependencies:

  ```bash
  npm install express cors body-parser twilio dotenv
  ```

### 2. Configure `.env`

Create a file named `.env` in the root directory with these variables:

```env
TWILIO_ACCOUNT_SID=from_twilio
TWILIO_AUTH_TOKEN=from_twilio
TWILIO_PHONE_NUMBER=from_twilio
```

### 3. Create the Backend

* Create `server.js` with an Express app
* POST endpoint `/send-sms`
* Use `twilio.messages.create` with data from the request body
* Enable `cors()` middleware

### 4. Create the Extension

#### `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "Send Link via SMS",
  "version": "1.0",
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "permissions": ["activeTab", "scripting"]
}
```

#### `popup.html`

* Create an input box for the phone number (`id="phoneNumber"`).
* Add a send button (`id="sendButton"`).
* Include a paragraph element for status messages (`id="status"`).
* Link `popup.css` for styling.
* Link Google Fonts for 'Roboto': `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">`.
* Link `popup.js` at the end of the body.

#### `popup.css`

* Style the popup using Material 3 design principles.
* Implement support for both light and dark color schemes using `@media (prefers-color-scheme: dark)`.
* Use `font-family: 'Roboto', sans-serif;`.
* Ensure a modern and clean look and feel.
    * **Key elements to style:** `body`, `h3`, `input[type="text"]`, `button`, `p#status`.
    * **Light Mode (Example Colors - adjust as needed for a blue theme):**
        * `body`: `background-color: #FEF7FF; color: #1D1B20;`
        * `input`: `background-color: #F3EDF7; border-color: #CAC4D0; color: #49454F;`
        * `input:focus`: `border-color: #6750A4;`
        * `button`: `background-color: #6750A4; color: #FFFFFF;`
        * `button:hover`: `background-color: #5A458C;`
    * **Dark Mode (Example Colors - adjust as needed for a blue theme):**
        * `body`: `background-color: #1D1B20; color: #E6E1E5;`
        * `input`: `background-color: #2B2930; border-color: #49454F; color: #CAC4D0;`
        * `input:focus`: `border-color: #D0BCFF;`
        * `button`: `background-color: #D0BCFF; color: #381E72;`
        * `button:hover`: `background-color: #B6A2E0;`
* Add transitions for a smoother user experience (e.g., `transition: background-color 0.3s, color 0.3s;`).

#### `popup.js`

* Query active tab for URL
* Make a `fetch` POST call to `http://localhost:3000/send-sms`

### 5. Create `.gitignore`

Add a `.gitignore` file to exclude common files and directories:

```
# Node modules
node_modules/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Environment variables
.env
.env.*.local

# Coverage directory
coverage/
.nyc_output/

# Operating system files
.DS_Store
Thumbs.db

# IDEs and editors
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# NPM pack
*.tgz

# Mac resource forks
._*
```

### 6. Create `README.md`

* Add a project title.
* Include the `icon.png` at the top, centered.
* List key features, including:
    * Material 3 design style.
    * Light/dark mode support.
* Provide installation and usage instructions.

---

## 🧪 Testing

* Run `node server.js`
* Open Chrome
* Load extension from `extension/` folder
* Navigate to any page, click the extension, and send SMS

---

## 🧠 Notes for Copilot

* Use `fetch` in `popup.js`.
* Handle CORS on the server.
* Use `dotenv` to read Twilio secrets.
* Ensure all scripts and stylesheets are linked correctly in `popup.html`.
* Assume localhost development environment (`http://localhost:3000` for the server).
* Pay attention to element IDs in `popup.html` for JavaScript interaction.
* Follow Material 3 guidelines for styling in `popup.css`.

---

## ✅ Completion Criteria

* Backend listens on port 3000
* Extension sends the current page URL as an SMS
* User gets an SMS via Twilio

---
