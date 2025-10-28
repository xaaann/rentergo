require("dotenv").config();
const express = require("express");
const path = require('path');

const app = express();
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// Placeholder for future API routes
// const router = require("./routes");
// app.use("/api", router);

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
