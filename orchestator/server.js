// server.js
// Entry point del servicio ORCHESTATOR
"use strict";
require("dotenv").config();
const express = require("express");
const path = require("path");
const orchestatorRoutes = require("./routes/orchestatorRoutes");
const {fetchKunna}=require("./services/orchestatorService");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());



// Rutas del servicio ACQUIRE
app.use("/", orchestatorRoutes);


// Arranque del servidor 
app.listen(PORT, async () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`[ORCHESTATOR] Servicio escuchando en ${serverUrl}`);
});
