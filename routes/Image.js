const express = require('express');
const router = express.Router();
const axios = require('axios');
require("dotenv").config({path: __dirname + '/.env'});
const models = require('../database/models');
const { auth } = require('./isLogined');
const fs = require("fs");
const path = require("path");
const SECRET_KEY = 'process.env.JWT_SECRET';
router.get('/:boardcode', (req, res) => {
        const boardcode = req.params.boardcode;

        let jpg,jpgpng,jpeg;
       // console.log(fs.statSync(path.join(__dirname, '../Image', boardcode + ".jpg")).isFile());
    try {
         png = fs.statSync(path.join(__dirname, '../Image', boardcode + ".png")).isFile() ? fs.readFileSync(path.join(__dirname, '../Image', boardcode + ".png"),'base64').toString('utf-8') : null;
         //png = new Buffer(png, 'base64').toString('utf-8');
         //console.log((png));
        return res.status(200).sendFile(path.join(__dirname, '../Image', boardcode + ".png"));
    } catch (error) {
         png = null;
    }
    try {
         jpg = fs.statSync(path.join(__dirname, '../Image', boardcode + ".jpg")).isFile() ? fs.readFileSync(path.join(__dirname, '../Image', boardcode + ".jpg"),'base64').toString('utf-8') : null;
        //jpg = new Buffer(jpg, 'base64').toString('utf-8');
        //console.log((jpg));
        return res.status(200).sendFile(path.join(__dirname, '../Image', boardcode + ".jpg"));
    } catch (error) {
         jpg = null;

    }
    try {
         jpeg = fs.statSync(path.join(__dirname, '../Image', boardcode + ".jpeg")).isFile() ? fs.readFileSync(path.join(__dirname, '../Image', boardcode + ".jpeg"),'base64').toString('utf-8') : null;
       // jpeg = new Buffer(jpeg, 'base64').toString('utf-8');
       // console.log((jpeg));
        return res.status(200).sendFile(path.join(__dirname, '../Image', boardcode + ".jpeg"));
    } catch (error) {
         jpeg = null;
    }

    try{


    } catch (e) {
        console.log(e);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;