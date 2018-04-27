const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/kochab';
const Koala = require('../models/koala.schema');

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log( `mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on( 'error', () => {
    console.log(`mongoose connection error ${error}`);
});

// POST
router.post('/', (req, res) => {
    console.log('POST to /koala req.body', req.body);
    console.log(req.body);
    Koala.create(req.body)
    .then((databaseResults) => {
        //good things happened
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error find', error);
        res.sendStatus(500);
    });
});
  
  // GET
  router.get('/', (req, res) => {
    Koala.find({})
    .then((dataFromDataBase) => {
        res.send(dataFromDataBase);
        console.log('data from data from database', dataFromDataBase)
    })
    .catch((error) => {
        console.log('error with koala find', error);
        res.sendStatus(500);
    });
  });

router.delete('/', (req, res) => {
    Koala.findByIdAndRemove(req.query._id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from delete', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    Koala.findByIdAndUpdate(req.body._id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from put', error);
            res.sendStatus(500);
        });
});
  
module.exports = router;