// routes/orchestatorRoutes.js
const express = require("express");
const router = express.Router();

const orchestatorController=require("../controllers/orchestatorController")

//Contrato del servicio orchestator
router.get("/health", orchestatorController.health);
router.post("/run", orchestatorController.run);

module.exports=router;