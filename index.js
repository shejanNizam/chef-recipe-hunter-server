const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

// data load
const chefData = require("./data/chefData.json");

// middle ware
app.use(cors());

app.get("/", (req, res) => {
  res.send("chef recipe hunter is running");
});

app.get("/chef_data", (req, res) => {
  res.send(chefData);
});

app.get("/chef_data/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefData.find((data) => data._id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`chef recipe hunter: ${port}`);
});
