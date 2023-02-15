const express = require("express");
const announcements = express.Router()
const { checkName, checkBoolean1, checkBoolean2 } = require("../validations/checkAnnouncements");
const { 
  getAllAnnouncements, 
  getAnnouncement, 
  createAnnouncement, 
  deleteAnnouncement, 
  updateAnnouncement } = require("../queries/announcements");

// INDEX
announcements.get("/", async (req, res) => {
    const allAnnouncements = await getAllAnnouncements();
    if (allAnnouncements[0]) {
      res.status(200).json(allAnnouncements);
    } else {
   res.status(500).json({ error: "server error" });
    }
  });


//SHOW
announcements.get("/:id", async (req, res) => {
  const { id } = req.params;
  const announcement = await getAnnouncement(id)
  console.log("announcement", announcement);
  if (!announcement.message) {
    res.status(200).json(announcement);
  } else {
    res.status(400).json({error : "not found "})
  }
});

//CREATE
announcements.post("/", checkName, checkBoolean1, checkBoolean2, async (req, res) => {
  try {
    const announcement = await createAnnouncement(req.body);
    res.status(200).json(announcement)
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//DELETE
announcements.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAnnouncement = await deleteAnnouncement(id);
  if (deletedAnnouncement.id) {
     res.status(200).json(deletedAnnouncement);
  } else {
    res.status(400).json("Announcement not found");
  }
});

//UPDATE
announcements.put("/:id", checkName, checkBoolean1, checkBoolean2, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAnnouncement = await updateAnnouncement(id, req.body);
    res.status(200).json(updatedAnnouncement);
    console.log('changed announcement',req.body)
} catch(error) {
  res.status(404).json({error: "id not found"})}
});


module.exports = announcements;