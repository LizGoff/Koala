const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/kochab';

// const Koala = require('../models/food.schema');

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log( `mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on( 'error', () => {
    console.log(`mongoose connection error ${error}`);
});

// POST
router.post('/', (req, res) => {
    console.log('POST to /koala req.body =', req.body);
  });
  
  // GET
  router.get('/', (req, res) => {
    koala.find({})
    .then(dataFromDataBase) => {
        res.send(dataFromDataBase);
        console.log('data from data from database', dataFromDataBase)
    })
    .catch(error => {
        console.log('error with koala find', error);
        res.sendStatus(500);
    });
});

router.put('/', (req, res) =>{
//
});

router.delete('/', (req, res) =>{
//
});
  
module.exports = router;