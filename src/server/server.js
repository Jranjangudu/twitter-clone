const express = require("express");
const app = express();
const PORT = process.env.POST || 5000;

app.get("/", (req, res) => {
  res.send("server running...");
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
