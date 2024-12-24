const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const dataPath = path.join(__dirname, "data", "users.json");

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files (HTML, CSS, JS)

// Helper function to read/write data
const readData = () => JSON.parse(fs.readFileSync(dataPath, "utf-8"));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// Routes

// Signup Route
app.post("/signup", (req, res) => {
  const { fullName, email, phone, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.json({ success: false, message: "Passwords do not match" });
  }

  const users = readData();
  if (users.find((user) => user.email === email)) {
    return res.json({ success: false, message: "Email already exists" });
  }

  users.push({ fullName, email, phone, password });
  writeData(users);

  res.json({ success: true, message: "Signup successful!" });
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = readData();
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});
app.post("/logout", (req, res) => {
  // Example: Clear the logged-in users array (or specific user)
  loggedInUsers = []; // Adjust as per session-like implementation
  res.json({ success: true });
});
