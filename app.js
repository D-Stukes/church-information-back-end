//DEPENDENCIES
const cors = require("cors");
const express = require("express");
const announcementController = require("./controllers/announcementController")

 // CONFIGURATION
 const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/announcements", announcementController)

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to this Church Information App")
})

//404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

//EXPORT
module.exports = app;