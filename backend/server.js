const express = require("express");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/export-email", (req, res) => {
  try {
    execSync("npm run export-email", { cwd: path.join(__dirname, "..") });

    const filePath = path.join(__dirname, "..", "build", "email.html");

    setTimeout(() => {
      res.download(filePath, "email.html");
    }, 1000);
  } catch (err) {
    res.status(500).send("Export failed.");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
