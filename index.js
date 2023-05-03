const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

const chefData = require("./data/chefData.json");
// middle ware
app.use(cors());

app.get("/", (req, res) => {
  res.send("chef recipe hunter is running");
});

app.get("/chef_data", (req, res) => {
  res.send(chefData);
});

app.listen(port, () => {
  console.log(`chef recipe hunter: ${port}`);
});
