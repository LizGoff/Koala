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
    // Temporary mock data. Replace this with mongoose.
    const mockData = [{ _id: 1, name: 'Mock 1', gender: 'F', age: 5, ready_to_transfer: true, notes: 'n/a' },
                      { _id: 2, name: 'Mock 2', gender: 'M', age: 5, ready_to_transfer: false, notes: 'n/a' }]
    res.send(mockData);
  });

router.put('/', (req, res) =>{
//
});

router.delete('/', (req, res) =>{
//
});
  
module.exports = router;