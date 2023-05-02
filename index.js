const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

// middle ware
app.use(cors());

app.get("/", (req, res) => {
  res.send("chef recipe hunter is running");
});

app.listen(port, () => {
  console.log(`chef recipe hunter: ${port}`);
});
