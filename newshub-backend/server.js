const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

const API_KEY = "pub_2f78b76b06434100abf951f3c6aad824";

app.get("/news", async (req, res) => {
  const category = req.query.category || "top";

  const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=in&category=${category}`;

  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running");
});