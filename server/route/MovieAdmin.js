"use strict";
const express = require('express')
const movie = express()
const Controller = require("../controller/controller")
const {authenticationAdmin} = require("../middleware/authentication")
const {authorizationAdmin, authorizationDelete} = require("../middleware/authorization")

movie.post("/login", Controller.Login)
movie.use(authenticationAdmin)
movie.post("/register", authorizationAdmin ,Controller.registerAdmin)

movie.get("/", Controller.Dashboard)
movie.get("/detail", Controller.DetailMovie)
movie.post("/", Controller.CreateMovie)
movie.get("/genre", Controller.Genre)

movie.get("/:id", Controller.getMoviebyId)
movie.put("/update/:id", authorizationDelete, Controller.UpdateMovie)
movie.delete("/delete/:id", authorizationDelete ,Controller.deleteMovie)
module.exports = movie