const express = require("express");
const app = express();
var cors = require('cors')

const postRoutes = require("./routes/posts");

// Import de las routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Configuracion de la conexion a la bd

app.use("/api/posts", postRoutes);

module.exports = app;
