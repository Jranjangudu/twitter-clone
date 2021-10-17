const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
//Bodyparser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cors middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
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
