const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

const API_KEY = "YOUR_API_KEY";

// ✅ HOME ROUTE (fix for Cannot GET /)
app.get("/", (req, res) => {
  res.send("NewsHub is LIVE 🚀");
});

// 📰 NEWS API ROUTE
app.get("/news", async (req, res) => {
  try {
    const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=in`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.json({ error: "Failed to fetch news" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
