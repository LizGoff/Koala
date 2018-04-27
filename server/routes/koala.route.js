const express = require('express');
const router = require('express').Router();
const databaseUrl = 'mongodb://localhost:27017/kochab'
// const Koala = require('../models/food.schema');

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

  module.exports = router;