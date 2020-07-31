const studentGetC = require('../controllers/studentGetC');
const express = require('express');
const router = express.Router();

router.get(
    '/get',
    studentGetC.dictionaryDataGet
);


module.exports =router;