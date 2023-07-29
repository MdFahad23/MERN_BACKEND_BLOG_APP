require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DB_URI)
  .then((res) => console.log("SUCCESSFULLY TO CONNECTING DATABASE!"))
  .catch((err) => console.log("DATABASE CONNECTING FAILED!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`APP RUNNING ON PORT ${PORT} `);
});
