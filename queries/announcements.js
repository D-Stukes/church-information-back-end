const db = require("../db/dbConfig.js");

//INDEX
const getAllAnnouncements = async () => {
    try {
      const allAnnouncements = await db.any('SELECT * FROM announcements');
      return allAnnouncements;
    } catch (error) {
      return error;
    }
  };

//SHOW
const getAnnouncement = async (id) => {
  try {
    const oneAnnouncement = await db.one("SELECT * FROM announcements WHERE id=$1", id);
    return oneAnnouncement;
  } catch (error) {
    return error;
  }
}

//CREATE 
const createAnnouncement = async (announcement) => {
try {
const newAnnouncement = await db.one( "INSERT INTO announcements(church_name, title, description, type, location, announcement.date, time, contributor, is_member, is_private) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
[announcement.church_name, announcement.title, announcement.description, announcement.type, announcement.location, announcement.date, announcement.time, announcement.contributor, announcement.is_member, announcement.is_private]
);
  return newAnnouncement;
  } catch (error) {
    return error;
  }
}


//DELETE
const deleteAnnouncement = async (id) => {
  try {
    const deletedAnnouncement = await db.one(
      "DELETE FROM announcements WHERE id=$1 RETURNING *",
      id
    );
    return deletedAnnouncement;
  } catch (error) {
    return error
  }
};

//UPDATE
const updateAnnouncement = async (id, announcement) => {
  try {
  const updatedAnnouncement = await db.one( 
      "UPDATE announcements SET church_name=$1, title=$2, description=$3, type=$4, location=$5, date=$6, time=$7, contributor=$8, is_member=$9, is_private=$10  WHERE id=$11 RETURNING *",
  [announcement.church_name, announcement.title, announcement.description, announcement.type, announcement.location, announcement.date, announcement.time, announcement.contributor, announcement.is_member, announcement.is_private, id ]
  );
  return updatedAnnouncement;
  } catch (error) {
    return error;
  };
};

module.exports = { getAllAnnouncements, getAnnouncement, createAnnouncement, deleteAnnouncement, updateAnnouncement }