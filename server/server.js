const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.POST || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors middleware
app.use(cors());
const Routes = require("./routes/routes");

const db = require("./config/keys");
mongoose
  .connect(db.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully ...");
  })
  .catch((err) => console.log("Internal server Error" + err));

app.use("/api", Routes);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
