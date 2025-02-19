const express = require("express")
const authRoute = require("./authRoutes.js")


const router = express.Router()
const BASE_URL = "/api"
router.use(`${BASE_URL}/auth`,authRoute)


module.exports = router