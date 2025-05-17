require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(cors());
app.use(bodyParser.json());

app.post("/send-sms", async (req, res) => {
  const { to, message } = req.body;

  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Twilio error:", error);
    res.status(500).json({ error: "Failed to send SMS" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
