const router = require('express').Router();
const { workout } = require('../models');

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, './views/stats.html'))
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});


router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, './views/exercise.html'))
});