const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

// Welcome Page
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    //user accessed after login
    name: req.user.name
  })
);

module.exports = router;
