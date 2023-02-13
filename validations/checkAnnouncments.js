
//CHECK NAME
const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  //CHECK BOOLEAN
  const checkBoolean1 = (req, res, next) => {

    if (
      req.body.is_member === true ||
      req.body.is_member === false 
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_member must be a boolean value" });
    }
  }
  const checkBoolean2 = (req, res, next) => {

    if (
      req.body.is_private === true ||
      req.body.is_private === false 
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_private must be a boolean value" });
    }
  }


  module.exports = { checkName, checkBoolean1, checkBoolean2 };