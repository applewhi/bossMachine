/*const express = require('express');
minionsRouter = express.Router();*/

const minionsRouter = require('express').Router();
module.exports = minionsRouter;

const{
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    req.minion = minion;
    next();
  }
  else {
    res.status(404).send();
  }
});

//get all minions
minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

//create a new minion and save it to the addToDatabase
minionsRouter.post('/', (req, res, next) => {
  res.status(201).send(addToDatabase('minions', req.body));
});

//to get a single minion by id
minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(getFromDatabaseId('minions',req.param.id));
});

//to update a single minion by id
minionsRouter.put('/:minionId', (req, res, next) => {
  let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);

  res.send(updatedMinionInstance);
});

//to delete a single minion by id
minionsRouter.put('/:minionId', (req, res, next) => {
  let updatedMinionInstance = deleteFromDatabasebyId('minions', req.body.id);

  if (updatedMinionInstance) {
    res.status(204);
  }
  else {
    res.status(500);
  }
  res.send();
});

//get an array of all work for the specified minion
minionsRouter.get('/:minionId/work', (req, res, next) => {
  res.send(getAllFromDatabase('works'));
});

//create a new work object and save it to the Database
/*minionRouter.post('/:minionId/work', (req, res, next) => {
    addToDatabase('works', {})
});/*
//update a single work by id


//delete a single work by id
