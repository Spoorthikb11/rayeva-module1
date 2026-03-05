const botRoutes = require("./routes/botRoutes");
const impactRoutes = require("./routes/impactRoutes");
const proposalRoutes = require("./routes/proposalRoutes");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", proposalRoutes);
app.use("/api", impactRoutes);
app.use("/api", botRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

app.get("/", (req, res) => {
  res.send("Server is working properly");
});

app.use("/api", productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});