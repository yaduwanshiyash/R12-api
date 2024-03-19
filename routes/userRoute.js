const express = require("express");
const router = express.Router();

const {home,createuser} = require("../controllers/usercontroller")

router.get("/", home );

router.post("/create",createuser);

module.exports = router;
